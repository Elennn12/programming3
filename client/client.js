

var socket = io()
socket.on("matrix", handlematrix)
var side = 300
function setup() {

    createCanvas(side, side);
    background('#acacac');
}

function handlematrix(matrix) {
    // background('#acacac');
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(29, 105, 13);
            }
            else if (matrix[y][x] == 0) {
                fill(115, 67, 3);
            }
            else if (matrix[y][x] == 2) {
                fill(120, 18, 23);
            }
            else if (matrix[y][x] == 3) {
                fill(250, 163, 12);
            }
            else if (matrix[y][x] == 4) {
                fill(13, 61, 94);
            }
            else if (matrix[y][x] == 5) {
                fill(148, 12, 114);
            }

            rect(x * side / matrix.length, y * side / matrix.length, side / matrix.length, side / matrix.length);
             
       
        }
    }
}







//statistics


function clickbuttun() {
    socket.emit("m", "get")

}


var p = document.getElementById("button");


p.addEventListener("click", clickbuttun);


socket.on("info", getS)
//socket.on("summer", summergo)


function getS(info) {
    info = JSON.parse(info)
    console.log(info)
    k.innerText = "grass " + info.grass
    f.innerText = "grassEater " + info.grasseater
    r.innerText = "gishatich " + info.gishatich
    d.innerText = "terrorist " + info.terrorist
    w.innerText = "hunter " + info.hunter

}


k = document.getElementById("k");
f = document.getElementById("f");
r = document.getElementById("r");
d = document.getElementById("d");
w = document.getElementById("w");



//season

let springArgument = false
 var spring = document.getElementById("spring");
 spring.addEventListener("click", function() {
    springArgument = true;
    summerArgument = false;
    fallArgument = false;
    winterArgument = false;
});


let summerArgument = true;
let summer = document.getElementById('summer');
summer.addEventListener('click', function () {
    springArgument = false;
    summerArgument = true;
    fallArgument = false;
    winterArgument = false;
})

let fallArgument = false;
let fall = document.getElementById('fall');
fall.addEventListener('click', function () {
    springArgument = false;
    summerArgument = false;
    fallArgument = true;
    winterArgument = false;
});

let winterArgument = false;
let winter = document.getElementById('winter');
winter.addEventListener('click', function () {
    springArgument = false;
    summerArgument = false;
    fallArgument = false;
    winterArgument = true;
});

function draww(matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                fill(115, 67, 3);
            }
            // grass
            else if (matrix[i][j] == 1) {
                if (springArgument == true) {
                    fill(57, 189, 0)
                } else if (summerArgument == true) {
                    fill(29, 105, 13);
                } else if (autumnArgument == true) {
                    fill(145, 155, 51);
                } else if (winterArgument == true) {
                    fill(255, 255, 255);
                }
            }
            //

            else if (matrix[i][j] == 2) {
                fill(120, 18, 23);
            }
            else if (matrix[i][j] == 3) {
                fill(250, 163, 12);
            }
            else if (matrix[i][j] == 4) {
                fill(13, 61, 94);
            }
            else if (matrix[i][j] == 5) {
                fill(148, 12, 114);
            }}
            rect(i * side / matrix.length, j * side / matrix.length, side / matrix.length, side / matrix.length);
        }}

// s = document.getElementById("s");
// a = document.getElementById("a");
// i = document.getElementById("i");
// n = document.getElementById("n");

// function summergo(summer){
//  if (summer = true ) {
//     grass.mul()
//  }  
// }




// iradardzutyun (play/pause)

var play = document.getElementById("play");
play.addEventListener("click", function (){
    // console.log("play inside")
    socket.emit("play");
    
});

var pause = document.getElementById("pause");
pause.addEventListener("click", function (){
    socket.emit("pause");
    
});


  socket.on ("game", anun)


  function anun(){
if (playArgument === true ) {
    
}
  }