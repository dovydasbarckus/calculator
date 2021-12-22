
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
let result = [];
let choseSign = false;


ac.addEventListener("click", ()=>{
    firstNumber = "";
    secondNumber = "";
    sign = null;
    result = [];
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
        }
        
            
    })
}

for (let s = 0; s <signs.length; s++ ){
    signs[s].addEventListener("click", function(e){
        sign = e.target.attributes.value.nodeValue;
        choseSign = true;
        
        
        
    })
}

function calculate(choseSign){

    if (choseSign){
        let myNumberArr2 = [...myNumberArr, Number(myNumbers)]
        console.log(myNumberArr2);

        if (sign === "plus"){
            result[0] = plus(myNumberArr2);
            // myNumberArr = [...result];
        } else if (sign === "minus") {
            result[0] = minus(myNumberArr2)
            // myNumberArr = [...result];
        } else if (sign === "multiply"){
            result[0] = multiply(myNumberArr2);
            // myNumberArr = [...result];
        } else if (sign === "divide"){
            result[0] = divide(myNumberArr2);
            // myNumberArr = [...result];
        }
    
        console.log(result[0])


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



