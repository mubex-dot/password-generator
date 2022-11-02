const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn1 = document.getElementById("btn-1")
let btn2 = document.getElementById("btn-2")
let passwordLength = 15
function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return (characters[randomCharacter])
}
function getRandompassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i += 1) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
    
}
function getRandom() {
let firstGeneratedPassword = getRandompassword()
btn1.textContent = firstGeneratedPassword
let secondGeneratedPassword = getRandompassword()
btn2.textContent = secondGeneratedPassword
}