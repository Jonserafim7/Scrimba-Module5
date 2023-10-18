import { placeholderPropertyObj } from "../properties/placeholderPropertyObj.js"
import { propertyForSaleArr } from "../properties/propertyForSaleArr.js"



function getPropertyHtml (array = [placeholderPropertyObj]) {

    let propertiesHTML = ``

    array.forEach(function(property) {
    
        const {image, propertyLocation, priceGBP, comment, roomsM2} = property //object destructuring
    
        propertiesHTML += `
            <div class="property" id="property">
                <div class="property-inner">
                    <img src="../images/${image}" class="property-img">
                    <div class="property-info">
                        <h2>${propertyLocation}</h2>
                        <h3>£${priceGBP}</h3>
                        <p>${comment}</p>
                        <h3>${getTotalM2(roomsM2)}m²</h3>
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

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)