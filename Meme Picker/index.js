import { catsData } from "./data.js"

// global variables
const emotionRadiosEl = document.getElementById("emotion-radios")
const getImageBtnEl = document.getElementById("get-image-btn")
const gifsOnlyOptionEl = document.getElementById("gifs-only-option")
const memeModalEl = document.getElementById("meme-modal")
const memeModalInnerEl = document.getElementById("meme-modal-inner")
const memeModalCloseBtnEl = document.getElementById("meme-modal-close-btn")






// event listeners
emotionRadiosEl.addEventListener("change",highlightCheckedOption) 
memeModalCloseBtnEl.addEventListener("click", closeModal)
document.addEventListener("click",closeModalAnywhere)
getImageBtnEl.addEventListener("click",renderCat)



// functions

function closeModal() {
    memeModalEl.style.display = "none"
}

/**
 * The closeModalAnywhere function is responsible for listening to click events
 * across the entire document and determining whether or not to close the memeModal.
 * 
 * @param {Event} event - The click event object, which contains details about the click.
 */
function closeModalAnywhere(event) {
    
    // Check if the modal is currently being displayed (visible to the user).
    // This ensures we don't attempt to close the modal when it's already closed.
    if (memeModalEl.style.display === "flex") {
        
        // This condition checks three things using the event.target, which tells us 
        // which element was clicked (origin of the click event):
        
        // 1. The click did NOT originate from within the memeModalInnerEl or any of its child elements.
        // This ensures that any interactions within the modal (like maybe selecting a meme option) 
        // do not close the modal.
        !memeModalInnerEl.contains(event.target) &&
        
        // 2. The click did NOT originate from the memeModalInnerEl itself.
        // This ensures that if the modal itself (or its boundary/padding area) is clicked, it won't close.
        event.target !== memeModalInnerEl &&
        
        // 3. The click did NOT originate from the getImageBtnEl button.
        // This ensures that when the user tries to generate an image by clicking the button,
        // the modal stays open.
        event.target !== getImageBtnEl
        
        // If ALL the above conditions are true, the closeModal function is called to hide the modal.
        ? closeModal()
        : null;  // Do nothing if any of the conditions are false.
    }
}




function renderCat() {
    /* 
    this function will use the cat object provided by getSingleCatObject() to create HTML 
    string which it will render it to the dom.
    */
    const catObject = getSingleCatObject()

    memeModalEl.style.display = "flex"
    
    memeModalInnerEl.innerHTML = `
        <img 
        class="cat-img" 
        src="images/${catObject.image}" 
        alt="${catObject.alt}">
    `
}

function getSingleCatObject() {
    // this function will return a single cat object selected from the array provided by getMatchingCatsArray().
    
    const catsArray = getMatchingCatsArray ()
    
    if (catsArray.length === 1){
        return catsArray[0]
    }

    else {
        const randomIndex= Math.floor ( Math.random() * catsArray.length )
        return catsArray[randomIndex]
    }
}

function getMatchingCatsArray () {
    // this function returns an array of cat objects that matches the user's criteria.

    if( document.querySelector("input[type='radio']:checked") ){

        const selectedEmotion = document.querySelector("input[type='radio']:checked").value
        const isGif = gifsOnlyOptionEl.checked
        

        const matchingCatsArray = catsData.filter(function(cat) {

             if (isGif) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif === true
            }
            
            else {
                return cat.emotionTags.includes(selectedEmotion)
            } 
            
        })   
        return matchingCatsArray 
    }
}


function highlightCheckedOption (e) {

    /*
    a. Removing the highlight class:
    It fetches all the elements with the class name "radio" and loops through them to remove the class "highlight".
    This ensures that any previously highlighted radio button or its container will lose its highlight.
    */
   
    const radioArray = document.getElementsByClassName("radio")
 
    for (let radioInpt of radioArray) {
        radioInpt.classList.remove("highlight")
    }

    /*
    b. Adding the highlight class:
    e.target.id refers to the ID of the radio button that was just selected or changed.
    It then gets the parent element of that radio button (using .parentElement) and adds the class "highlight" to it.
    This effectively highlights the container of the radio button that was just clicked or changed.
    */

    document.getElementById(e.target.id).parentElement.classList.add("highlight")
}

function getEmotionsArray(cats) {
    const emotionsArray = []

    for (let cat of cats) {
        
        for(let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)    
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)

    let radioItems = ""

    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input 
                type= "radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
            >
        </div>
            `
    }
    
    emotionRadiosEl.innerHTML = radioItems
}

renderEmotionsRadios(catsData)