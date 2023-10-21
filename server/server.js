var express = require("express");
var app = express();

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

let Grass = require("./grass.js")
let GrassEater = require("./grassEater.js")
let Gishatich = require ("./gishatich.js")
let Terrorist = require ("./terrorist.js")
let Hunter = require ("./hunter.js")


var matrix = [
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


var side = 10;

let grassArr = []
let grassEaterArr = []
let GishatichArr = []
let hunterArr = []
let terroristArr =[]
function  create (){
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
            let hunter = new Hunter (x, y, 4)
            hunterArr.push(hunter)
        }
        else if (matrix[y][x] == 5) {
            let terrorist = new Terrorist (x, y, 5)
            terroristArr.push(terrorist)
        }

    }

}


}



function run ()
    {
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
    }


    run();

    io.on('connection', function (socket) {

        // for(var i in matrix) {
        
        socket.emit("myMatrix", matrix[i]);
        
        // }
        
        // socket.on("send message", function (data) {
        
        // messages.push(data);
        
        // io.sockets.emit("display message", data);
        
        });
        
        // });