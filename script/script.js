let colors = ["green", "red", "yellow", "blue"];
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

//change text function
function changeText(string, change){
    //changing text
    document.getElementById(string).innerHTML = change;
}

//next sequence
function nextSequence(){
    var index = Math.floor(Math.random() * colors.length);
    var color = colors[index];
    generatedSequence.push(color);
    fade_Button(color);  //effect for next button
    level += 1;
    changeText("text", "Level " + level);
}

//buttons clicks
function greenClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/green.mp3");
    audio.play();
    greenBtn.style.backgroundColor = "lightgray";
    greenBtn.style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {greenBtn.style.backgroundColor = "green"}, 200);
    setTimeout(function() {greenBtn.style.boxShadow = "none"}, 200);
    check("green");
}

function redClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/red.mp3");
    audio.play();
    redBtn.style.backgroundColor = "lightgray";
    redBtn.style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {redBtn.style.backgroundColor = "red"}, 200);
    setTimeout(function() {redBtn.style.boxShadow = "none"}, 200);
    check("red");
}

function yellowClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/yellow.mp3");
    audio.play();
    yellowBtn.style.backgroundColor = "lightgray";
    yellowBtn.style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {yellowBtn.style.backgroundColor = "yellow"}, 200);
    setTimeout(function() {yellowBtn.style.boxShadow = "none"}, 200);
    check("yellow");
}

function blueClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/blue.mp3");
    audio.play();
    blueBtn.style.backgroundColor = "lightgray";
    blueBtn.style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {blueBtn.style.backgroundColor = "blue"}, 200);
    setTimeout(function() {blueBtn.style.boxShadow = "none"}, 200);
    check("blue");
}

function check(color) { //checking if the color is correct
    userSequence.push(color);
    if(color == generatedSequence[clickNumber]) {
        if(userSequence.length == generatedSequence.length){  //reseting user sequence at the end of each level
            setTimeout(function() {
                if (generatedSequence.length == 15){          //when finishing the final level
                    changeText ("text", "Congratulations, You Won.<br/> Click anywhere to restart.");
                    greenBtn.removeEventListener("click", greenClick);
                    redBtn.removeEventListener("click", redClick);
                    yellowBtn.removeEventListener("click", yellowClick);
                    blueBtn.removeEventListener("click", blueClick);
                    userSequence = [];
                    generatedSequence = [];
                    clickNumber = -1;
                    level = 0;
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
        userSequence = [];
        generatedSequence = [];
        clickNumber = -1;
        level = 0;

        //"wrong" effect
        var audio = new Audio("./assets/sounds/wrong.mp3");
        audio.play();
        mainBtn.style.backgroundColor = "red";
        setTimeout(function() {mainBtn.style.backgroundColor = "rgb(0, 0, 90)"}, 200);
        changeText("text", "Game Over, Press Any Key To Restart");
        greenBtn.removeEventListener("click", greenClick);
        redBtn.removeEventListener("click", redClick);
        yellowBtn.removeEventListener("click", yellowClick);
        blueBtn.removeEventListener("click", blueClick);
        mainBtn.addEventListener("mousedown", main_button_click);
    }
   
}

function fade_Button(nextColor){
    if (nextColor == "green"){
        var audio = new Audio("./assets/sounds/green.mp3");
        audio.play();
        greenBtn.style.visibility = "hidden";
        setTimeout(function() {greenBtn.style.visibility = "visible"}, 200);
    }

    else if (nextColor == "red") {
        var audio = new Audio("./assets/sounds/red.mp3");
        audio.play();
        redBtn.style.visibility = "hidden";
        setTimeout(function() {redBtn.style.visibility = "visible"}, 200);
    }

    else if (nextColor == "yellow") {
        var audio = new Audio("./assets/sounds/yellow.mp3");
        audio.play();
        yellowBtn.style.visibility = "hidden";
        setTimeout(function() {yellowBtn.style.visibility = "visible"}, 200);
    }

    else {
        var audio = new Audio("./assets/sounds/blue.mp3");
        audio.play();
        blueBtn.style.visibility = "hidden";
        setTimeout(function() {blueBtn.style.visibility = "visible"}, 200);
    }

}

function main_button_click(){
    mainBtn.removeEventListener("mousedown", main_button_click);
    setTimeout(function() {
        if (level == 0){
            //round 
            nextSequence();        //hiding next color
            
            //player's turn
            greenBtn.addEventListener("click", greenClick);
            redBtn.addEventListener("click", redClick);
            yellowBtn.addEventListener("click", yellowClick);
            blueBtn.addEventListener("click", blueClick);
        }
    }, 500)
}

// inital click to start the game
mainBtn.addEventListener("mousedown", main_button_click);

