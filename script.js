var numSq = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var msg = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");

initMode();
initSquares();

function initMode(){
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("difficulty");
            modeBtns[1].classList.remove("difficulty");
            this.classList.add("difficulty");
            (this.textContent === "Easy") ? numSq = 3 : numSq = 6;
            reset();
        })
    }
}

function initSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                msg.textContent = "Correct !";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again ?";
            }
            else {
                this.style.backgroundColor = "#232323";
                msg.textContent = "Try Again !";
            }
        })
    }
    reset();
}



function reset() {
    colors = randomColorArray(numSq);
    pickedColor = pickRandom();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue"; 
    msg.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickRandom(){
    var len = colors.length;
    var num = Math.floor(Math.random()*len);
    return colors[num];
}

function randomColorArray(num) {
    var array = []
    for(var i=0;i<num;i++){
        array.push(colorRandom());
    }
    return array;
}

function colorRandom(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}