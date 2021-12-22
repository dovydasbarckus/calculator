
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
})

del.addEventListener("click", ()=>{

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
    })
}

function calculate(){

    if (sign === "plus"){
        firstNumber = plus(Number(firstNumber), Number(secondNumber));
        secondNumber = "";
        result = firstNumber;
        
    } else if (sign === "minus") {
        result = minus(Number(firstNumber), Number(secondNumber))
        firstNumber = result;
        secondNumber = "";

    } else if (sign === "multiply"){
        result = multiply(Number(firstNumber), Number(secondNumber));
    } else if (sign === "divide"){
        result = divide(Number(firstNumber), Number(secondNumber));
    }

    console.log(result)
   
}

equal.addEventListener("click", totalValue);

function totalValue(){
    console.log(result)
}




const percentages = document.querySelector(".percentages");
const divideV = document.querySelector(".divide");
const multiplyV = document.querySelector(".multiply");
const plusV = document.querySelector(".plus");
const minusV = document.querySelector(".minus");
const dot = document.querySelector(".dot");


const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");



