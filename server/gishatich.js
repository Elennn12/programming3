let LivingCreature = require("./livingcreature.js")
let random = require("./random");
module.exports = class Gishatich extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 15;
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


    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }

   

    mul() {
        if (this.energy >= 8) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newGishatich = new Gishatich(newCell[0], newCell[1], this.index);
                GishatichArr.push(newGishatich);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy++;
            }
        }

    }
    move() {

        this.energy--;

        
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }

    eat() {

        let foods = this.chooseCell(2)
        let food = random(foods)
        if (food) {
            this.energy++
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 3
            this.x = newX
            this.y = newY
            for (var i in GishatichArr) {
                if (newX == GishatichArr[i].x && newY == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 5) {
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
        for (var i in GishatichArr) {
            if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
                break;
            }
        }
    }
}
