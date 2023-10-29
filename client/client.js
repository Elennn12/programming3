var socket = io()
socket.on("matrix", handlematrix)
var side = 700
grassColor = "green"
grassEaterColor = "yellow"
gishatichColor = "orange"
function setup() {

    createCanvas(side, side);
    background('#acacac');
}

function handlematrix(matrix) {
    // background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(grassColor)
            }
            else if (matrix[y][x] == 0) {
                fill(115, 67, 3);
            }
            else if (matrix[y][x] == 2) {
                fill(grassEaterColor);
            }
            else if (matrix[y][x] == 3) {
                fill(gishatichColor);
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
socket.on("ww", handleW)
socket.on("")

function handleW(ww){
    if(ww =="summer"){
        weather.innerText  = "The weather is Summer"
    }
    else if ( ww == "autumn"){
        weather.innerText = "The weather is Autumn"
    }
    else if (ww == "winter"){
        weather.innerText = "The weather is Winter"
    }
    else if (ww == "spring"){
        weather.innerText = "The weather is Spring"
    }
    else{
        ' '
    }
}

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

weather = document.getElementById("weather");
weather.innerText  = "The weather is Spring"


function winter(){
    console.log("dzmer")
    grassColor = "white"
    grassEaterColor = "#ffffaa"
    gishatichColor = "#ffdd99"

    socket.emit("winter", "winter")
}
function spring(){
    console.log("garun")
    grassColor = "green"
    grassEaterColor = "yellow"
    gishatichColor = "orange"

    socket.emit("spring", "spring")
}
function summer(){
    console.log("amar")
    grassColor = "green"
    grassEaterColor = "yellow"
    gishatichColor = "orange"

    socket.emit("summer", "summer")
}
function autumn(){
    console.log("ashun")
    grassColor = "#888822"
    grassEaterColor = "yellow"
    gishatichColor = "orange"

    socket.emit("autumn", "autumn")
}

// iradardzutyun (play/pause)

var play = document.getElementById("play");
play.addEventListener("click", function () {
    // console.log("play inside")
    socket.emit("play");

});

var pause = document.getElementById("pause");
pause.addEventListener("click", function () {
    socket.emit("pause");

});


  //socket.on ("game", anun)


//kill
var kill = document.getElementById("kill");


kill.addEventListener("click", clickbuttunn);

function clickbuttunn() {
    socket.emit("kill", "hello")

}