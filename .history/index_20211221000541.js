
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
let result = 0;
let choseSign = false;


ac.addEventListener("click", ()=>{
    firstNumber = "";
    secondNumber = "";
    sign = null;
    result = 0;
    choseSign = false;
})

del.addEventListener("click", ()=>{
    if (!choseSign){
        firstNumber = firstNumber.slice(0, -1);
        console.log(firstNumber)
    } else{
        secondNumber = secondNumber.slice(0, -1);
    }
})


for (let i = 0; i <numbers.length; i++ ){
    numbers[i].addEventListener("click", function(e){
        let value = e.target.attributes.value.nodeValue;
        if (!choseSign){
            firstNumber += value;
            console.log(firstNumber)
        } else {
            secondNumber += value;
            console.log(secondNumber)
            calculate()
        }
        
            
    })
}

for (let s = 0; s <signs.length; s++ ){
    signs[s].addEventListener("click", function(e){
        sign = e.target.attributes.value.nodeValue;
        choseSign = true; 
        secondNumber = "";
    })
}

function calculate(){

    if (sign === "plus"){
        firstNumber = plus(Number(firstNumber), Number(secondNumber));
        result = firstNumber;
    } else if (sign === "minus") {
        firstNumber = minus(Number(firstNumber), Number(secondNumber))
        result = firstNumber;
    } else if (sign === "multiply"){
        firstNumber = multiply(Number(firstNumber), Number(secondNumber));
        result = firstNumber;
    } else if (sign === "divide"){
        firstNumber = divide(Number(firstNumber), Number(secondNumber));
        result = firstNumber;
    }

    console.log(result)
   
}

equal.addEventListener("click", totalValue);

function totalValue(){
    console.log(result)
    firstNumber = "";
    secondNumber = "";
    sign = null;
    result = 0;
    choseSign = false;
}



