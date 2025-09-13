
// let passwordLength = document.getElementById("length")
// let inUppercase = document.getElementById("uppercase")
// let inLowercase = document.getElementById("lowercase")
// let inNumber = document.getElementById("number")
// let insymbol = document.getElementById("symbol")
// let gen_btn = document.getElementsByTagName("button")
// let displayPass = document.getElementById("password-display")

// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowercase ="abcdefghijklmnopqrstuvwxyz"
// const number = "1234567890"
// const symbol = '!@#$%^&*()_+{}[]:<>?|";,.~`/'

// gen_btn[0].addEventListener('click', generate)
// function generate() {

//     let character ='';
//     if(inUppercase.checked) character += uppercase; 
//     if(inLowercase.checked) character += lowercase; 
//     if(inNumber.checked) character += number; 
//     if(insymbol.checked) character += symbol; 

//     const length = parseInt(passwordLength.value);

//     if(length < 4 || length > 20 || character == ''){
//         displayPass.textContent = "Please select valid options."
//         return ;
//     }

//     let password ='';

//     for(i=0; i<length; i++){
//      const ranIndex = Math.floor(Math.random()*character.length)
//      password += character[ranIndex]
//     }

//     displayPass.textContent = password;
// }


let passwordLength = document.getElementById("length");
let inUppercase = document.getElementById("uppercase");
let inLowercase = document.getElementById("lowercase");
let inNumber = document.getElementById("numbers");
let insymbol = document.getElementById("symbols");
let gen_btn = document.getElementsByTagName("button");
let displayPass = document.getElementById("password-display");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = '!@#$%^&*()_+{}[]:<>?|";,.~`/';

gen_btn[0].addEventListener('click', generate);

function generate() {
    let character = '';
    if (inUppercase.checked) character += uppercase; 
    if (inLowercase.checked) character += lowercase; 
    if (inNumber.checked) character += number; 
    if (insymbol.checked) character += symbol; 

    const length = parseInt(passwordLength.value);

    if (length < 4 || length > 20 || character === '') {
        displayPass.textContent = "Please select valid options.";
        return;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const ranIndex = Math.floor(Math.random() * character.length);
        password += character[ranIndex];
    }

    displayPass.textContent = password;
}
