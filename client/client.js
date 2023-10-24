

var socket = io()
socket.on("matrix", handlematrix)
var side = 800
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


var season1 = document.getElementById("button1");


season1.addEventListener("clickk", clickbuttun1);

function clickbuttun1() {
   // socket.emit("season", "get")
    
}
var season2 = document.getElementById("button2");


season2.addEventListener("clickkk", clickbuttun2);

function clickbuttun2() {
   // socket.emit("season", "get")
    
}

s = document.getElementById("s");
a = document.getElementById("a");
i = document.getElementById("i");
n = document.getElementById("n");


