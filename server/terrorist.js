let LivingCreature = require ("./livingcreature.js")
let random = require("./random");
module.exports = class Terrorist extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index)
    //     this.x = x;
    //     this.y = y;
    //     this.index = index;
    this.energy = 15;
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1], 
    //         [this.x + 1, this.y + 1]
    //     ];


     }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    // chooseCell(character) {
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

    //             if (matrix[y][x] == character) {
    //                 found.push(this.directions[i]);
    //             }
    //         }

    //     }
    //     return found;

    // }
    
    chooseCell(ch){
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }
    
    mul() {
        let random = require("./random");
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newTerrorist = new Terrorist(newCell[0], newCell[1], this.index);
            terroristArr.push(newTerrorist);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 15
        }
    }
    move() {

        this.energy--;

        console.log(this.energy);
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {

        let foods = this.chooseCell(3 && 4)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 5
            this.x = newX
            this.y = newY
            for (var i in terroristArr) {
                if (newX == terroristArr[i].x && newY == terroristArr[i].y) {
                    terroristArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 20) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    die() {
        console.log("merav");

        matrix[this.y][this.x] = 0
        for (var i in terroristArr) {
            if (this.x == terroristArr[i].x && this.y == terroristArr[i].y) {
                terroristArr.splice(i, 1);
                break;
            }
        }
    }
}







