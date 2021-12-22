
import plus from "./modules/plus.js";
import minus from "./modules/minus.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";

const ac = document.querySelector(".ac");
const del = document.querySelector(".del")
const equal = document.querySelector(".equal");
const numbers = document.getElementsByClassName("number");
const signs = document.getElementsByClassName("signs");
let firstNumber = "";
let secondNumber = "";
let sign = null;
let result = "";
let sum = "";
let choseSign = false;


ac.addEventListener("click", ()=>{
    firstNumber = "";
    secondNumber = "";
    sign = null;
    result = "";
    choseSign = false;
})

del.addEventListener("click", ()=>{
    if (!choseSign){
        firstNumber = firstNumber.slice(0, -1);
        console.log(firstNumber)
    } else{
        secondNumber = secondNumber.slice(0, -1);
        console.log(secondNumber)
    }
})


for (let i = 0; i <numbers.length; i++ ){
    numbers[i].addEventListener("click", function(e){
        let value = e.target.attributes.value.nodeValue;
        if (!choseSign){
            firstNumber += value;
        } else {
            secondNumber += value;
            calculate()
        }
        
            
    })
}

for (let s = 0; s <signs.length; s++ ){
    signs[s].addEventListener("click", function(e){
        sign = e.target.attributes.value.nodeValue;
        if ( result != ""){
            firstNumber = result;
        }
        choseSign = true; 
        secondNumber = "";
    })
}

function calculate(){

    if (sign === "plus"){
        result = plus(Number(firstNumber), Number(secondNumber));
        // result = Number(sum);
        // console.log(sum + " suma");
        // console.log(firstNumber + " pirmas skaičius");
        // console.log(secondNumber + " antras skaicius");
    } else if (sign === "minus") {
        sum = minus(Number(firstNumber), Number(secondNumber))
        result = Number(sum);

    } else if (sign === "multiply"){
        sum = multiply(Number(firstNumber), Number(secondNumber));
        result = Number(sum);
    } else if (sign === "divide"){
        sum = divide(Number(firstNumber), Number(secondNumber));
        result = Number(sum);
    }
   console.log(result);
}

equal.addEventListener("click", totalValue);

function totalValue(){
    console.log(result)
    secondNumber = "";
    sign = null;
}




