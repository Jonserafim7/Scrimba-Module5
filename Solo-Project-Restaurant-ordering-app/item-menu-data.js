import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const itemMenuArr = []

function MenuItem (icon,name ,description, price) {
    this.icon = icon
    this.name = name
    this.description = description
    this.price = price
    this.uuid = uuidv4()
    itemMenuArr.push(this)
    }



const pizza = new MenuItem(
    "🍕",
    "Pizza", 
    "pepperoni,mushrom,mozarella",
    14)

const burguer = new MenuItem(
    "🍔",
    "Hamburger", 
    "beef, cheese, lettuce",
    12)
    
const beer = new MenuItem(
    "🍺",
    "Beer", 
    "grain, hops, yeast, water",
    12)

// const cheeseck = new MenuItem(
//     "Cheesecake", 
//     "creamcheese, cramberry",
//     "$15")
    





