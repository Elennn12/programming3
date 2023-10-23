var socket = io()
socket.on("matrix", handlematrix)
var side = 800
function setup() {
    frameRate(30)
    createCanvas(side,side);
    background('#acacac');}

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

                rect(x * side/matrix.length, y * side/matrix.length, side/matrix.length, side/matrix.length); 
            }}}

            


     
            
            
            