// OR operator (||)

/*
Challenge:
1. Make it so that if the jobHunter object does not have 
   a name property, the username is used instead.
*/

const jobHunter = {
    // name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    

    
// Complete this line of code 👇
const jobHunterName = jobHunter.name || jobHunter.username

console.log(`Hey ${jobHunterName}!`)


// AND Operator (&&)

/*
Challenge:
1. If the passcode passed into authenticationCheck 
   exists in swissBankPassCodesArr, authenticationCheck 
   should log out accountBalanceUsd. 
   
   If the passcode does not exist in swissBankPassCodesArr 
   then authenticationCheck need not do anything.
   
⚠️ Make sure you short-circuit with &&
   hint.md for help!
*/

const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){

    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd) 

    // swissBankPassCodesArr.includes(passCode) || console.log('Incorrect passcode')

}

authenticationCheck(1234)