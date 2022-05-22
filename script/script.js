let colors = ["green", "red", "yellow", "blue"];
let generatedSequence = [];
let userSequence = [];
var level = 0;
var clickNumber = -1; //number of the click to increment the index

//linking variables
var greenBtn = document.getElementsByClassName("green");
var redBtn = document.getElementsByClassName("red");
var yellowBtn = document.getElementsByClassName("yellow");
var blueBtn = document.getElementsByClassName("blue");
var wrongBtn = document.getElementsByClassName("red");
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
    console.log(generatedSequence);
    colorLevelBtn(color);  //effect for next button
    level += 1;
    changeText("text", "Level " + level);
}

//buttons clicks
function greenClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/green.mp3");
    audio.play();
    greenBtn[0].style.backgroundColor = "lightgray";
    greenBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {greenBtn[0].style.backgroundColor = "green"}, 200);
    setTimeout(function() {greenBtn[0].style.boxShadow = "none"}, 200);
    console.log(userSequence);
    check("green");
}

function redClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/red.mp3");
    audio.play();
    redBtn[0].style.backgroundColor = "lightgray";
    redBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {redBtn[0].style.backgroundColor = "red"}, 200);
    setTimeout(function() {redBtn[0].style.boxShadow = "none"}, 200);
    console.log(userSequence);
    check("red");
}

function yellowClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/yellow.mp3");
    audio.play();
    yellowBtn[0].style.backgroundColor = "lightgray";
    yellowBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {yellowBtn[0].style.backgroundColor = "yellow"}, 200);
    setTimeout(function() {yellowBtn[0].style.boxShadow = "none"}, 200);
    console.log(userSequence);
    check("yellow");
}

function blueClick(){
    clickNumber += 1;
    var audio = new Audio("./assets/sounds/blue.mp3");
    audio.play();
    blueBtn[0].style.backgroundColor = "lightgray";
    blueBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {blueBtn[0].style.backgroundColor = "blue"}, 200);
    setTimeout(function() {blueBtn[0].style.boxShadow = "none"}, 200);
    console.log(userSequence);
    check("blue");
}

function check(color) { //checking if the color is correct
    userSequence.push(color);
    if(color == generatedSequence[clickNumber]) {
        if(userSequence.length == generatedSequence.length){  //reseting user sequence at the end of each level
            setTimeout(function() {
                if (generatedSequence.length == 15){          //when finishing the final level
                    changeText ("text", "Congratulations, You Won.");
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
        mainBtn[0].style.backgroundColor = "red";
        setTimeout(function() {mainBtn[0].style.backgroundColor = "rgb(0, 0, 90)"}, 200);
        changeText("text", "Game Over, Press Any Key To Restart");
    }
}

function colorLevelBtn(nextColor){
    if (nextColor == "green"){
        var audio = new Audio("./assets/sounds/green.mp3");
        audio.play();
        greenBtn[0].style.visibility = "hidden";
        setTimeout(function() {greenBtn[0].style.visibility = "visible"}, 200);
    }

    else if (nextColor == "red") {
        var audio = new Audio("./assets/sounds/red.mp3");
        audio.play();
        redBtn[0].style.visibility = "hidden";
        setTimeout(function() {redBtn[0].style.visibility = "visible"}, 200);
    }

    else if (nextColor == "yellow") {
        var audio = new Audio("./assets/sounds/yellow.mp3");
        audio.play();
        yellowBtn[0].style.visibility = "hidden";
        setTimeout(function() {yellowBtn[0].style.visibility = "visible"}, 200);
    }

    else {
        var audio = new Audio("./assets/sounds/blue.mp3");
        audio.play();
        blueBtn[0].style.visibility = "hidden";
        setTimeout(function() {blueBtn[0].style.visibility = "visible"}, 200);
    }

}



// inital click to start the game
mainBtn.addEventListener("click", function(){
    setTimeout(function() {
    if (level == 0){
        //round 
        nextSequence();        //hiding next color
        
        //player's turn
        greenBtn[0].addEventListener("click", greenClick);
        redBtn[0].addEventListener("click", redClick);
        yellowBtn[0].addEventListener("click", yellowClick);
        blueBtn[0].addEventListener("click", blueClick);
        
    }
}, 500)
    
}, {once: true});

