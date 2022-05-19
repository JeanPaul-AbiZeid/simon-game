let colors = ["green", "red", "yellow", "blue"];
let generatedSequence = [];
let userSequence = [];
var level = 0;


//generating numbers between 0 and 3
function randomColor(){
    var index = Math.floor(Math.random() * colors.length);
    return index;
}

//sounds
function playSoundGreen(){
    var audio = new Audio("./assets/sounds/green.mp3");
    audio.play();
}

function playSoundRed(){
    var audio = new Audio("./assets/sounds/red.mp3");
    audio.play();
}

function playSoundYellow(){
    var audio = new Audio("./assets/sounds/yellow.mp3");
    audio.play();
}

function playSoundBlue(){
    var audio = new Audio("./assets/sounds/blue.mp3");
    audio.play();
}

function playSoundWrong(){
    var audio = new Audio("./assets/sounds/wrong.mp3");
    audio.play();
}

