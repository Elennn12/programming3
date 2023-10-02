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
function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    
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

function draw() {

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

            rect(x * side, y * side, side, side);

            //textSize (30)
            //fill("blue")
            //text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

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