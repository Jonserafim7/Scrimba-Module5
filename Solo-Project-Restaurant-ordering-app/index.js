// data
import { itemMenuArr } from "./item-menu-data.js";















// global variables
const menuDisplayEl = document.getElementById("menu-display");
const cartSectionEl = document.getElementById("cart-section");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const paymentModal = document.getElementById("payment-modal")
const paymentForm = document.getElementById("payment-form")
const modalText = document.getElementById("modal-text")
const cartSection = document.getElementById("cart-section")

let cart  = {
    items: [],
    totalPrice: 0
}
















// event listeners
document.addEventListener("click",function(e){
    if(e.target.dataset.addbtn){
        addMenuItemToCart(e.target.dataset.addbtn)
        
    }
    else if(e.target.dataset.removebtn){
        removeMenuItemFromCart(e.target.dataset.removebtn)
    }
    else if(e.target.dataset.completeorderbtn){
        completeOrder()
    }
    else if(e.target.dataset.closemodal){
        closePaymentModal()
    }
    else if(e.target.dataset.starone){
        console.log("user review: one star")
        paymentModal.style.display = "none"
    }
    else if(e.target.dataset.startwo){
        console.log("user review: two stars")
        paymentModal.style.display = "none"
    }
    else if(e.target.dataset.starthree){
        console.log("user review: three stars")
        paymentModal.style.display = "none"
    }
    else if(e.target.dataset.starfour){
        console.log("user review: four stars")
        paymentModal.style.display = "none"
    }
    else if(e.target.dataset.starfive){
        console.log("user review: five stars")
        paymentModal.style.display = "none"
    }
})















// functions




// Items Menu

function getItemMenuHTML() {
    return itemMenuArr.map(function(menuItem){
        const {name,price,uuid, description, icon} = menuItem;
        return `
        <div class="container">
            <div class="menu-container">
                <div class="menu-item-content">
                    <div class="menu-item-icon">${icon}</div>
                    <div class="menu-item-details">
                        <h3 class="menu-item-name">${name}</h3>
                        <p class="menu-item-description">${description}</p>
                        <h3 class="menu-item-price">$ ${price}</h3>
                    </div>
                    <button class="add-to-cart-btn" data-addbtn="${uuid}">+</button>
                </div>
            </div>
        </div>
        `;
    }).join("");
}

function renderItemMenuHTML(){
    menuDisplayEl.innerHTML = getItemMenuHTML();
}

renderItemMenuHTML()








// Cart

function addMenuItemToCart(menuItemUUID) {
    showCart();

    const addedMenuItemObj = itemMenuArr.find(menuItem => menuItem.uuid === menuItemUUID);
    const existingItem = findObjectByUUID(menuItemUUID);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        addedMenuItemObj.quantity = 1;
        cart.items.push(addedMenuItemObj);
    }

    cart.totalPrice = calculateTotalCartValue()

    updateCartHTML();
}

function removeMenuItemFromCart(menuItemUUID) {
    const itemInCart = findObjectByUUID(menuItemUUID);
    
    if (itemInCart) {
        if (itemInCart.quantity > 1) {
            itemInCart.quantity -= 1;
        } else {
            cart.items = cart.items.filter(menuItem => menuItem.uuid !== menuItemUUID);
        }
    }

    if (cart.items.length === 0) {
        hideCart()
    }

    cart.totalPrice = calculateTotalCartValue();
    updateCartHTML();
}

function findObjectByUUID(menuItemUUID) {
    return cart.items.find(menuItem => menuItem.uuid === menuItemUUID);
}

function findObjectByName(menuItemName) {
    return cart.items.find(menuItem => menuItem.name === menuItemName);
}

function showCart(){
    cartSectionEl.classList.remove("hidden");
}

function hideCart(){
    cartSectionEl.classList.add("hidden");
}

function generateCartHTML() {
    const itemsHTML = cart.items.map(menuItem => {
        const {name, price, quantity, uuid} = menuItem;
        return `
            <div class="cart-item">
                <div class="cart-item-content">
                    <h3 class="cart-item-name">${name} (x${quantity})</h3>
                    <p class="remove-cart-item-btn" data-removebtn="${uuid}">remove</p>
                    <h3 class="cart-item-price">$ ${price}</h3>
                </div>
            </div>
        `;
    }).join('');

    let hasBeer = findObjectByName("Beer");
    let hasPizza = findObjectByName("Pizza");
    let hasHamburger = findObjectByName("Hamburger");

    let discountApplied = (hasBeer && (hasPizza || hasHamburger));
    let warningMessage = "";

    if (hasBeer) {
        if (hasPizza || hasHamburger) {
            warningMessage = "You saved 15%";
        } else {
            warningMessage = "Add a Pizza or a Burguer to get 15% off";
        }
    } else if (hasPizza || hasHamburger) {
        warningMessage = "Add a drink to get 15% off";
    }

    let discountedPrice = discountApplied ? cart.totalPrice - (cart.totalPrice * 0.15) : cart.totalPrice;

    let totalPriceHTML = `
        <div class="cart-total-content">
            <div>
                <p class="${discountApplied ? "with-discount-warning" : "no-discount-warning"}">${warningMessage}</p>
            </div>
            <div class="cart-total-price">
                <h3 class="total-price-text">Total price</h3>
                <h3 class="total-price-value">$ ${discountedPrice}</h3>
            </div>
        </div>
    `;

    return {itemsHTML, totalPriceHTML}
}


function calculateTotalCartValue() {
    return cart.items.reduce((total, menuItem) => total + (menuItem.price * menuItem.quantity), 0);
}

function updateCartHTML() {
    
    const { itemsHTML, totalPriceHTML } = generateCartHTML();

    cartItemsEl.innerHTML = itemsHTML;
    cartTotalEl.innerHTML = totalPriceHTML;

}

function completeOrder(){
    paymentModal.style.display="block"
}





// Payment modal
function closePaymentModal(){
    paymentModal.style.display = "none"
}

paymentForm.addEventListener("submit",function(e) {
    e.preventDefault()

    const paymentFormData = new FormData(paymentForm)

    const userName = paymentFormData.get("fullName")
    // console.log(userName)

    const cardNumber = paymentFormData.get("card-numer")
    // console.log(cardNumber)

    const cardCVV = paymentFormData.get("cvv")
    // console.log(cardCVV)


    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <p id="uploadText">Processing payment...</p>
    </div>
    `

    setTimeout(function(){
        document.getElementById('uploadText').textContent = `
        Purchase complete!
        `
    }, 1000)

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2 class="modal-inner-headline">Thanks for your purchase! </h2>
        <h2 class="modal-inner-exp-rate">Rate your experience</h2>
        <div class="idiot-gif">
            <i class="fa-solid fa-star" id="star-one" data-starone="onestar"></i>
            <i class="fa-solid fa-star" id="star-two" data-startwo="twostar"></i>
            <i class="fa-solid fa-star" id="star-three" data-startree="threestar"></i>
            <i class="fa-solid fa-star" id="star-four" data-starfour="fourstar"></i>
            <i class="fa-solid fa-star" id="star-five" data-starfive="fivestar"></i>
        </div>
        `
    }, 1000)

    setTimeout(() => {
        userRating()
    }, 1000);
    
    setTimeout(() => {
        cartSection.innerHTML = `Thanks, ${userName}! Your order is on its way!`
        cartSection.classList.toggle("thanks-message")
    }, 1000);
})

function highlightStar(hoveredStar, changedStar){
    document.getElementById(hoveredStar).addEventListener("mouseenter", function(){
        document.getElementById(changedStar).style.color = "#16DB99"
    }) 
    
    document.getElementById(hoveredStar).addEventListener("mouseleave", function(){
        document.getElementById(changedStar).style.color = "#757575"
    }) 
    
}

function userRating() {
    highlightStar("star-five", "star-one")
    highlightStar("star-five", "star-two")
    highlightStar("star-five", "star-three")
    highlightStar("star-five", "star-four")
    highlightStar("star-five", "star-five")

    
    highlightStar("star-four", "star-one")
    highlightStar("star-four", "star-two")
    highlightStar("star-four", "star-three")
    highlightStar("star-four", "star-four")

    highlightStar("star-three", "star-two")
    highlightStar("star-three", "star-one")
    highlightStar("star-three", "star-three")

    highlightStar("star-two", "star-one")
    highlightStar("star-two", "star-two")

    highlightStar("star-one", "star-one")
}














