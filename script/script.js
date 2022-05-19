let colors = ["green", "red", "yellow", "blue"];
let generatedSequence = [];
let userSequence = [];
var level = 0;


//generating numbers between 0 and 3
function randomColor(){
    var index = Math.floor(Math.random() * colors.length);
    return index;
}



