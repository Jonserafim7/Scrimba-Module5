// function Character(name) {
//     this.name = name
//     this.collectedItemsArr = []
//     this.addItem = function(item){
//         this.collectedItemsArr.push(item)
//         console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//     }
// }

// const dave = new Character("Dave")

// dave.addItem("banana")
// dave.addItem("orange")
// dave.addItem("car")

// console.log(dave)





// Refactoring the constructor as a class

class Character {
    constructor (name) {
        this.name = name
        this.collectedItemsArr = []
    }
    addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const dave = new Character("Dave")

dave.addItem("banana")
dave.addItem("orange")
dave.addItem("car")

console.log(dave)