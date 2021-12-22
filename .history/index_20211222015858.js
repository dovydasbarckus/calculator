
import plus from "./modules/plus.js";
import minus from "./modules/minus.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";
import percentage from "./modules/percentage.js";
import ShowNumbers from "./modules/showNumbers.js";

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del")
const equal = document.querySelector(".equal");
const numbers = document.getElementsByClassName("number");
const signs = document.getElementsByClassName("signs");
const dot = document.querySelector(".dot");
let firstNumber = "";
let secondNumber = "";
let sign = null;
let signBefore = null;
let signSymbol = "";
let result = "";
let choseSign = false;
let newScreen = null;
let addedSign = false;
let firstNumberMinus = false;


const showValues = new ShowNumbers(screen1);

ac.addEventListener("click", ()=>{
    newScreen.remove();
    firstNumber = "";
    secondNumber = "";
    sign = null;
    signBefore = null;
    result = "";
    choseSign = false;
    newScreen = null;
    signSymbol = "";
    showValues.remove();
})

del.addEventListener("click", ()=>{
    if (!choseSign){
        firstNumber = firstNumber.slice(0, -1);
    } else{
        secondNumber = secondNumber.slice(0, -1);
    }
})

dot.addEventListener("click", ()=>{
    if (!choseSign){
        if(!firstNumber.includes(".")){
            firstNumber += ".";
        }
    } else {
        if(!secondNumber.includes(".")){
            secondNumber += ".";
        }
    }
})

for (let i = 0; i <numbers.length; i++ ){
    numbers[i].addEventListener("click", function(e){
        let value = e.target.attributes.value.nodeValue;
        
        if (!choseSign){
            firstNumber += value;
            if (firstNumberMinus){
                firstNumber = Number(firstNumber) * -1;
                console.log(firstNumber)
                firstNumberMinus = false;
            }
            showValues.show(signSymbol, firstNumber);
        } else {
            secondNumber += value;
            showValues.show(signSymbol, secondNumber);
            addedSign = false;
            calculate()
        }
        
            
    })
}

for (let s = 0; s <signs.length; s++ ){
    signs[s].addEventListener("click", function(e){
        sign = e.target.attributes.value.nodeValue;
        signSymbol = e.target.innerHTML;

        if(firstNumber != "" && !addedSign){
            showValues.showSign(signSymbol);
            addedSign = true;
        }

        if(firstNumber === "" && sign === "minus"){
            showValues.showSign(signSymbol);
            firstNumberMinus = true;
        }
        
        if (sign === "percentages" && signBefore === "multiply"){
            calculate();
        } else{
            if ( result != ""){
                firstNumber = result;
            }
            choseSign = true; 
            secondNumber = "";
        }

        signBefore = sign;
    })
}

function calculate(){

    if (sign === "plus"){
        result = plus(Number(firstNumber), Number(secondNumber));

    } else if (sign === "minus") {
        result = minus(Number(firstNumber), Number(secondNumber))

    } else if (sign === "multiply"){
        result = multiply(Number(firstNumber), Number(secondNumber));

    } else if (sign === "divide"){
        result = divide(Number(firstNumber), Number(secondNumber));

    } else if (sign === "percentages"){
        result = percentage(Number(firstNumber), Number(secondNumber));
    }

}

equal.addEventListener("click", totalValue);

function totalValue(){
    if (newScreen === null){
        newScreen = document.createElement("h2");
        let content = document.createTextNode(result);
        newScreen.appendChild(content);
        screen2.appendChild(newScreen);
    } else{
        newScreen.remove();
        newScreen = document.createElement("h2");
        let content = document.createTextNode(result);
        newScreen.appendChild(content);
        screen2.appendChild(newScreen);
    }

    secondNumber = "";
    showValues.remove();
    sign = null;
}




