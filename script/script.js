let colors = ["green", "red", "yellow", "blue"];
let generatedSequence = [];
let userSequence = [];
var level = 1;

//linking buttons
var greenBtn = document.getElementsByClassName("green");
var redBtn = document.getElementsByClassName("red");
var yellowBtn = document.getElementsByClassName("yellow");
var blueBtn = document.getElementsByClassName("blue");
var wrongBtn = document.getElementsByClassName("red");
var mainBtn = document.getElementsByClassName("main-container");

//generating numbers between 0 and 3
function randomColor(){
    var index = Math.floor(Math.random() * colors.length);
    return index;
}

//sounds
function greenClick(){
    var audio = new Audio("./assets/sounds/green.mp3");
    audio.play();
    greenBtn[0].style.backgroundColor = "lightgray";
}

function redClick(){
    var audio = new Audio("./assets/sounds/red.mp3");
    audio.play();
    redBtn[0].style.backgroundColor = "lightgray";
}

function yellowClick(){
    var audio = new Audio("./assets/sounds/yellow.mp3");
    audio.play();
    yellowBtn[0].style.backgroundColor = "lightgray";
}

function blueClick(){
    var audio = new Audio("./assets/sounds/blue.mp3");
    audio.play();
    yellowBtn[0].style.backgroundColor = "lightgray";
}

function wrongClick(){
    var audio = new Audio("./assets/sounds/wrong.mp3");
    audio.play();
}


// inital click to start the game
mainBtn[0].addEventListener("click", function(){
    greenBtn[0].addEventListener("click", greenClick);
    redBtn[0].addEventListener("click", redClick);
    yellowBtn[0].addEventListener("click", yellowClick);
    blueBtn[0].addEventListener("click", blueClick);
})

