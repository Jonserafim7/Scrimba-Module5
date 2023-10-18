import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"


function getPropertyHtml () {

    let propertiesHTML = ``

    propertyForSaleArr.forEach(function(property) {
    
        propertiesHTML += `
            <div class="property" id="property">
                <div class="property-inner">
                    <img src="images/${property.image}" class="property-img">
                    <div class="property-info">
                        <h2>${property.propertyLocation}</h2>
                        <h3>£${property.priceGBP}</h3>
                        <p>${property.comment}</p>
                        <h3>${getTotalM2(property.roomsM2)}</h3>
                    </div>
                </div>
            </div>
        `
    })

    return propertiesHTML

}

function getTotalM2(array){
    return array.reduce((total,current) => total + current,0)
}

// function getSquareFootageArrays() {

    
//     const squareFootageArray = propertyForSaleArr.map(property =>{
//         console.log(property.roomsM2)
//         let soma = property.roomsM2.reduce((total,current) => total + current,0)
//         return soma
//     })   
        
//     return squareFootageArray
// }

// const test = getSquareFootageArrays()
// // console.log(test)



document.getElementById('container').innerHTML = getPropertyHtml()