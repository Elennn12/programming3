var express = require("express");
var app = express();
var fs = require ("fs")
app.use(express.static("../client"));

var server = require('http').createServer(app); // add
var io = require('socket.io')(server); // add

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () { // add
    console.log("Example is running on port 3000");
});
////my code

Grass = require("./grass.js")
GrassEater = require("./grassEater.js")
Gishatich = require("./gishatich.js")
Terrorist = require("./terrorist.js")
Hunter = require("./hunter.js")


matrix = [
    [0, 1, 4, 0, 2, 0, 0, 0, 2, 3, 2, 0, 0, 0, 2, 0, 4, 0, 0, 2, 0, 0, 4, 0, 0, 2, 0, 0, 2, 1, 2, 0, 3, 0, 0, 0, 2, 0, 0, 2],
    [0, 0, 0, 2, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0],
    [2, 1, 0, 0, 0, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 5, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 5, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 3, 0, 0, 2, 3, 0, 2, 0, 1, 0, 0, 1, 0, 2, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 2, 0, 5, 0, 0, 0, 0, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 2, 1, 2, 2, 1, 2, 1, 0, 2, 2, 0, 0, 3, 0, 0, 0, 3, 0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 5, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 2, 0, 2, 0, 0, 3, 0, 2, 0, 0, 2, 0, 0, 3, 4, 0, 0, 3, 0, 0, 3, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 5, 0, 2, 4, 1, 3, 0, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 1, 0, 0, 3, 0, 0, 0, 0, 2, 5, 0, 0, 3, 0, 0, 3, 0, 0],
    [0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 4, 0, 1, 5, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 1, 0, 1, 3, 0, 0, 3, 0, 0, 2, 0, 3, 0, 0, 0, 5, 3, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 2, 2, 1, 0, 1, 5, 0, 0, 1, 0, 2, 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 3, 0, 2, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 2, 4, 1, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 1, 2, 0, 3, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 2, 4, 0, 0, 2, 0, 5, 0, 0, 3, 0, 0, 0, 2, 1, 0, 3, 0, 0, 2, 5, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 2, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 3, 0, 0, 0, 4, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0]
];



frameRate = 2000
grassArr = []
grassEaterArr = []
GishatichArr = []
hunterArr = []
terroristArr = []
function create() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y, 3)
                GishatichArr.push(gishatich)
                
            }
            else if (matrix[y][x] == 4) {
                let hunter = new Hunter(x, y, 4)
                hunterArr.push(hunter)
                
            }
            else if (matrix[y][x] == 5) {
                let terrorist = new Terrorist(x, y, 5)
                terroristArr.push(terrorist)
                
            }

        }

    }


}

create()

function run() {


    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat();
    }
    for (var i in hunterArr) {
        hunterArr[i].eat();
    }
    for (var i in terroristArr) {
        terroristArr[i].eat();
    }
//statistics
    io.sockets.emit("matrix", matrix);
    var obj = {
        grass: grassArr.length, 
        grasseater: grassEaterArr.length, 
        gishatich: GishatichArr.length,
        terrorist: terroristArr.length,
        hunter: hunterArr.length
    }
    var  myJSON = JSON.stringify(obj);
    fs.writeFileSync("statistics.json", myJSON );   





}





io.on('connection', function (socket) {
    socket.emit("matrix", matrix);
    socket.on ("m", b)
    socket.on ("pause", pause)
    socket.on ("play", play)
    socket.on ("kill", killeveryone)

    socket.on("winter", changeRate)
socket.on("spring", changeRate)
socket.on("summer", changeRate)
socket.on("autumn", changeRate)

    // socket.on ("season", summer)
    //socket.on ("season",  )

});


//statistics
function b(){
    let info = fs.readFileSync("statistics.json").toString()
    io.sockets.emit("info", info)

}



//iradardzutyunner (play/pause)

playArgument = false;

function pause() {
    playArgument = false;
    clearInterval(id)
    count=0
}


let count = 1;
var id;
function play() {
    if(count ==0){

        id = setInterval(run, 1000);
        //clearinterval(id)
        // count=0
        count++
        playArgument = true;
    }
}


//season

var id
id = setInterval(run, frameRate)

function changeRate(ww){
    if(ww=="spring"){
        frameRate = 600
    }
    
    else if(ww =="winter"){
        frameRate = 2000
    }
    else if(ww =="autumn"){
        frameRate = 1500
    }
    else if(ww =="summer"){
        frameRate = 1000
    }
    console.log(frameRate)
    clearInterval(id)
    id = setInterval(run, frameRate)
    io.sockets.emit("ww",ww )
}


//clear

function killeveryone(){
    garssArr = []
    // matrixi vrayov fra u inchqan tver ka dardznel 0
    grassEaterArr = 0
    GishatichArr=0
    hunterArr =0
    terroristArr =0
}