import { catsData } from "./data.js"

const emotionRadiosEl = document.getElementById("emotion-radios")






emotionRadiosEl.addEventListener("change",highlightCheckedOption) 
    




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