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
})















// functions




// Items Menu

function getItemMenuHTML() {
    return itemMenuArr.map(function(menuItem){
        const {name,price,uuid, description, icon} = menuItem;
        return `
        <div class="container">
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

    const totalPriceHTML = `
        <div class="cart-total-content">
            <h3 class="total-price-text">Total price</h3>
            <h3 class="total-price-value">$ ${cart.totalPrice}</h3>
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
    console.log(userName)

    const cardNumber = paymentFormData.get("card-numer")
    console.log(cardNumber)

    const cardCVV = paymentFormData.get("cvv")
    console.log(cardCVV)


    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <p id="uploadText">Processing payment...</p>
    </div>
    `

    setTimeout(function(){
        document.getElementById('uploadText').textContent = `
        Purchase complete!
        `
    }, 1500)

    setTimeout(function(){
        paymentModal.style.display = "none"
    },3000)

    setTimeout(() => {
        cartSection.innerHTML = `Thanks, ${userName}! Your order is on its way!`
        cartSection.classList.toggle("thanks-message")
    }, 3000);

    // setTimeout(function(){
    //     document.getElementById('modal-inner').innerHTML = `
    //     <h2>Thanks <span class="modal-display-name">${userName}</span>,you sucker! </h2>
    //     <p>We just sold the rights to your eternal soul.</p>
    //     <div class="idiot-gif">
    //         <img src="images/pirate.gif">
    //     </div>
    //     `
    //     modalCloseBtn.disabled = false
    // }, 3000)
    
})














