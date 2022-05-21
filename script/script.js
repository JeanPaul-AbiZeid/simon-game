let colors = ["green", "red", "yellow", "blue"];
let generatedSequence = [];
let userSequence = [];
var level = 0;

//linking variables
var greenBtn = document.getElementsByClassName("green");
var redBtn = document.getElementsByClassName("red");
var yellowBtn = document.getElementsByClassName("yellow");
var blueBtn = document.getElementsByClassName("blue");
var wrongBtn = document.getElementsByClassName("red");
var mainBtn = document.getElementsByClassName("main-container");

//change text function
function changeText(string, change){
    //changing text
    document.getElementById(string).innerHTML = change;
}

function nextRound(){
    level += 1;
    changeText("text", "Level " + level);
}

//generating color
function randomColor(){
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

//buttons clicks
function greenClick(){
    var audio = new Audio("./assets/sounds/green.mp3");
    audio.play();
    greenBtn[0].style.backgroundColor = "lightgray";
    greenBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {greenBtn[0].style.backgroundColor = "green"}, 200);
    setTimeout(function() {greenBtn[0].style.boxShadow = "none"}, 200);
    userSequence.push("green");
}

function redClick(){
    var audio = new Audio("./assets/sounds/red.mp3");
    audio.play();
    redBtn[0].style.backgroundColor = "lightgray";
    redBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {redBtn[0].style.backgroundColor = "red"}, 200);
    setTimeout(function() {redBtn[0].style.boxShadow = "none"}, 200);
    userSequence.push("red");
}

function yellowClick(){
    var audio = new Audio("./assets/sounds/yellow.mp3");
    audio.play();
    yellowBtn[0].style.backgroundColor = "lightgray";
    yellowBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {yellowBtn[0].style.backgroundColor = "yellow"}, 200);
    setTimeout(function() {yellowBtn[0].style.boxShadow = "none"}, 200);
    userSequence.push("yellow");
}

function blueClick(){
    var audio = new Audio("./assets/sounds/blue.mp3");
    audio.play();
    blueBtn[0].style.backgroundColor = "lightgray";
    blueBtn[0].style.boxShadow = "0 0 10px 5px lightgray";
    setTimeout(function() {blueBtn[0].style.backgroundColor = "blue"}, 200);
    setTimeout(function() {blueBtn[0].style.boxShadow = "none"}, 200);
    userSequence.push("blue");
}

function wrongClick(){
    var audio = new Audio("./assets/sounds/wrong.mp3");
    audio.play();
    mainBtn[0].style.backgroundColor = "red";
    setTimeout(function() {mainBtn[0].style.backgroundColor = "rgb(0, 0, 90)"}, 200);
    changeText("text", "Game Over, Press Any Key To Restart");
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
mainBtn[0].addEventListener("click", function(){
    setTimeout(function() {
    nextRound();  //changing levels
        
    let nextColor = randomColor();
    generatedSequence.push(nextColor);   //adding to sequence
    colorLevelBtn(nextColor)

    greenBtn[0].addEventListener("click", greenClick);
    redBtn[0].addEventListener("click", redClick);
    yellowBtn[0].addEventListener("click", yellowClick);
    blueBtn[0].addEventListener("click", blueClick);
    console.log(userSequence);
    }, 500)
    
}, {once: true});

