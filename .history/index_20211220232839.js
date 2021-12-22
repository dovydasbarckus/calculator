
import plus from "./modules/plus.js";
import minus from "./modules/minus.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";

const ac = document.querySelector(".ac");
const del = document.querySelector(".del")
const equal = document.querySelector(".equal");
const numbers = document.getElementsByClassName("number");
const signs = document.getElementsByClassName("signs");
let firstNumber = null;
let secondNumber = null;
let sign = null;
let result = 0;
let choseSign = false;


ac.addEventListener("click", ()=>{
    firstNumber = null;
    secondNumber = null;
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
        } else {
            secondNumber += value;
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
        result = plus(Number(firstNumber), Number(secondNumber));

        // myNumberArr = [...result];
    } else if (sign === "minus") {
        result = minus(myNumberArr2)
        // myNumberArr = [...result];
    } else if (sign === "multiply"){
        result = multiply(myNumberArr2);
        // myNumberArr = [...result];
    } else if (sign === "divide"){
        result = divide(myNumberArr2);
        // myNumberArr = [...result];
    }

    console.log(result)


    // } else {
    //     if (myNumberArr != ""){
    //         console.log(myNumberArr);
    //         myNumberArr.push(Number(myNumbers));
    //         myNumbers = "";
        
    //         if (sign === "plus"){
    //             result[0] = plus(myNumberArr);
    //             // myNumberArr = [...result];
    //         } else if (sign === "minus") {
    //             result[0] = minus(myNumberArr)
    //             // myNumberArr = [...result];
    //         } else if (sign === "multiply"){
    //             result[0] = multiply(myNumberArr);
    //             // myNumberArr = [...result];
    //         } else if (sign === "divide"){
    //             result[0] = divide(myNumberArr);
    //             // myNumberArr = [...result];
    //         }
        
    //         ;
    //     }
   
   
   
}

equal.addEventListener("click", totalValue);

function totalValue(){
    console.log(result[0])
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



