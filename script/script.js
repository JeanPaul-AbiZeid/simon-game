let generatedSequence = [];
let userSequence = [];
var level = 0;
var clickNumber = -1; //number of the click to increment the index

//linking variables
var greenBtn = document.getElementById("green");
var redBtn = document.getElementById("red");
var yellowBtn = document.getElementById("yellow");
var blueBtn = document.getElementById("blue");
var mainBtn = document.getElementById("main-container");

//color map
const color_array = [["green", greenBtn, greenClick],
                    ["red", redBtn, redClick],
                    ["yellow", yellowBtn, yellowClick],
                    ["blue", blueBtn, blueClick]];

//change text function
function changeText(string, change){
    //changing text
    document.getElementById(string).innerHTML = change;
}

//next sequence
function nextSequence(){
    var index = Math.floor(Math.random() * color_array.length);
    var color = color_array[index][0];
    generatedSequence.push(color);
    fade_Button(color);  //effect for next button
    level += 1;
    changeText("text", "Level " + level);
}

//buttons clicks

function click_changes(index){
    var color = color_array[index][0]; 
    var color_button = color_array[index][1];            
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/" + color + ".mp3");
    audio.play();
    color_button.style.backgroundColor = "lightgray";
    color_button.style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {color_button.style.backgroundColor = color}, 200);
    setTimeout(function() {color_button.style.boxShadow = "none"}, 200);
    check(color);
}
    
function greenClick(){
    click_changes(0);
}

function redClick(){
    click_changes(1);
}

function yellowClick(){
    click_changes(2);
}

function blueClick(){
    click_changes(3);
}

function remove_listner(color_map){
    for(var index = 0; index < color_array.length; index++){
    color_array[index][1].removeEventListener("click",color_array[index][2]);
    }
}

function add_listner(color_map){
    for(var index = 0; index < color_array.length; index++){
        color_array[index][1].addEventListener("click",color_array[index][2]);
    }
}

function reset(){
    userSequence = [];
    generatedSequence = [];
    clickNumber = -1;
    level = 0;
}

function check(color) { //checking if the color is correct
    userSequence.push(color);
    if(color == generatedSequence[clickNumber]) {
        if(userSequence.length == generatedSequence.length){  //reseting user sequence at the end of each level
            setTimeout(function() {
                if (generatedSequence.length == 5){          //when finishing the final level
                    changeText ("text", "Congratulations, You Won.<br/> Click anywhere to restart.");
                    remove_listner()
                    reset();
                    mainBtn.addEventListener("mousedown", main_button_click);
                    }
                else {
                    userSequence = [];
                    clickNumber = -1;
                    nextSequence();
                }
            }, 1000);  
        }
    }
    else {  //if wrong color
        //reseting variables
        reset();

        //"wrong" effect
        var audio = new Audio("./assets/sounds/wrong.mp3");
        audio.play();
        mainBtn.style.backgroundColor = "red";
        setTimeout(function() {mainBtn.style.backgroundColor = "rgb(0, 0, 90)"}, 200);
        changeText("text", "Game Over, Press Any Key To Restart");
        remove_listner();
        mainBtn.addEventListener("mousedown", main_button_click);
    }
   
}

function fade_Button(nextColor){
    for(var index = 0; index < color_array.length; index++){
        if (nextColor == color_array[index][0]){
        var audio = new Audio("./assets/sounds/" + color_array[index][0] + ".mp3");
        audio.play();
        var color_button = color_array[index][1];
        color_button.style.visibility = "hidden";
        setTimeout(function() {color_button.style.visibility = "visible"}, 200);
    }
    }
}

function main_button_click(){
    mainBtn.removeEventListener("mousedown", main_button_click);
    setTimeout(function() {
        if (level == 0){
            //round 
            nextSequence();        //hiding next color
            
            //player's turn
            add_listner();
        }
    }, 500)
}

// inital click to start the game
mainBtn.addEventListener("mousedown", main_button_click);

