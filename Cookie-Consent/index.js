
const modalEl = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceContainer = document.getElementById("modal-choice-btns")


setTimeout(function() {
    modalEl.style.display = "inline"
}, 1500);

modalCloseBtn.addEventListener("click", function(){
    modalEl.style.display = "none"
})

consentForm.addEventListener("submit",function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)

    const userName = consentFormData.get("fullName")
    console.log(userName)

    const userEmail = consentFormData.get("email")
    console.log(userEmail)


    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">Uploading your data to the dark web...</p>
    </div>
    `

    setTimeout(function(){
        document.getElementById('uploadText').textContent = `
        Making the sale...
        `
    }, 1500)

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${userName}</span>,you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
        modalCloseBtn.disabled = false
    }, 3000)
    
})

declineBtn.addEventListener("mouseover",function() {

   modalChoiceContainer.classList.toggle("reverse")
   
})