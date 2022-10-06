"use strict";

// SELECTORS START
const btnLargeLetters = document.querySelector('#large-letters-click');
const btnSmallLetters = document.querySelector('#small-letters-click');
const btnNumbers = document.querySelector('#numbers-click');
const btnSpecial = document.querySelector('#special-click');
const btnGenerate = document.querySelector('#btn-generate');
let passwordOutput = document.querySelector('#password-output');

// SELECTORS END

// BOOLEANS FOR CHECKING BUTTON PRESS STATE START

let largeActive = false;
let smallActive = false;
let numbersActive = false;
let specialActive = false;

// BOOLEANS END

// STRINGS FOR GENERATING PASSWORD CHARACTERS START
const largeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smallString = 'abcdefghijklmnopqrstuvwxyz';
const numberString = '0123456789';
const specialString = `!@#$%^&*()-_=+[{}]|/?.>,<`;

let testString = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{}]|/?.>,<`;


// STRINGS END




// console.log(`random char array value = ${randomCharArray}`)



// ARRAYS FOR PASSWORD GENERATION START
const charArray = [largeString, smallString, numberString, specialString];

let randomCharArray = Math.floor(Math.random() * charArray.length);

let largeRandomIndex = Math.floor(Math.random() * largeString.length - 1);
let smallRandomIndex = Math.floor(Math.random() * smallString.length - 1);
let numberRandomIndex = Math.floor(Math.random() * numberString.length - 1);
let specialRandomIndex = Math.floor(Math.random() * specialString.length - 1);
// ARRAYS END

// console.log(largeRandomIndex)
// console.log(smallRandomIndex);
// console.log(numberRandomIndex)
// console.log(specialRandomIndex);



// MAIN LOGIC START
btnLargeLetters.addEventListener('click', () => {

    if(largeActive === false){
        largeActive = true;
        console.log('large active!')
    } else {
        largeActive = false;
        console.log('large inactive!')
    }
});

btnSmallLetters.addEventListener('click', () => {
    if(smallActive === false){
        smallActive = true;
        console.log('small active!')
    } else {
        smallActive = false;
        console.log('small inactive!')
    }
});
btnNumbers.addEventListener('click', () => {
    if(numbersActive === false){
        console.log('numbers active!')
        numbersActive = true;
    } else {
        numbersActive = false;
        console.log('numbers inactive!')
    }
});
btnSpecial.addEventListener('click', () => {
    if(specialActive === false){
        specialActive = true;
        console.log('special active!')
    } else {
        specialActive = false;
        console.log('special inactive!')
    }
});


btnGenerate.addEventListener('click', () => {
    let generatedPassword = '';
    
    let testLength = testString.length
    for(let i = 0; i < 12; i++){
        
        generatedPassword += testString.charAt(Math.floor(Math.random()* testLength))

        // console.log(generatedPassword) 
    }

    if(passwordOutput.value != ''){
        passwordOutput.value = ''
        passwordOutput.value += generatedPassword
    } else {
    passwordOutput.value += generatedPassword
    }

        
    
});

// MAIN LOGIC END