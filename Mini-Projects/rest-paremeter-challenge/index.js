 /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you 
       see **NAME**.
    3. Return HTML template for each label.
    */

// function getLabelsHtml(text, sender, ...names) {
   
//     let label = ''

//     names.forEach( name => {
//         label +=
//             `
//             <div class="label-card">
//                 <p>Dear ${name.name},</p>
//                 <p>${text}</p>
//                 <p>Best wishes,</p>
//                 <p>${sender}</p>
//             </div>
//             `
//     })

//     return label
// }

function getLabelsHtml(text, sender, ...staffObjs) {
    
    const labelHTML = staffObjs.map((staffObj) => `
        <div class="label-card">
            <p>Dear ${staffObj.name},</p>
            <p>${text}</p>
            <p>Best wishes,</p>
            <p>${sender}</p>
        </div>
    `).join('')

    return labelHTML
}



console.log()
    
    const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
    const sender = 'Tom'
    
    document.getElementById('labels-container').innerHTML = getLabelsHtml(
        text, 
        sender,
        {name: 'Sally'}, 
        {name: 'Mike'}, 
        {name: 'Rob'}, 
        {name: 'Harriet'}
        ) 
    


    