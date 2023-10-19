function Character(name) {
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const dave = new Character("Dave")

dave.addItem("banana")
dave.addItem("orange")
dave.addItem("car")

console.log(dave)