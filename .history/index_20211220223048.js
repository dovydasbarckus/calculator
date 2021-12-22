
import plus from "./modules/plus.js";
import minus from "./modules/minus.js";
import multiply from "./modules/multiply.js";
import divide from "./modules/divide.js";

const ac = document.querySelector(".ac");
const del = document.querySelector(".del")
const equal = document.querySelector(".equal");
const numbers = document.getElementsByClassName("number");
const signs = document.getElementsByClassName("signs");
let myNumbers = "";
let myNumberArr = [];
let sign = null;
let result = [];


ac.addEventListener("click", ()=>{
    myNumbers = "";
    myNumberArr = [];
    sign = null;
    result = [];
})

del.addEventListener("click", ()=>{

})


for (let i = 0; i <numbers.length; i++ ){
    numbers[i].addEventListener("click", function(e){
        let value = e.target.attributes.value.nodeValue;
        myNumbers += value;
    })
}

for (let s = 0; s <signs.length; s++ ){
    signs[s].addEventListener("click", function(e){
        console.log(myNumbers);
        sign = e.target.attributes.value.nodeValue;
        if (myNumbers != ""){
            myNumberArr.push(Number(myNumbers));
            myNumbers = "";
        } 
    })
}

function calculate(){

    if (myNumberArr != ""){

        if (myNumbers != ""){
            myNumberArr.push(Number(myNumbers));
            myNumbers = "";
        } 
    
        if (sign === "plus"){
            result[0] = plus(myNumberArr);
            myNumberArr = [...result];
        } else if (sign === "minus") {
            result[0] = minus(myNumberArr)
            myNumberArr = [...result];
        } else if (sign === "multiply"){
            result[0] = multiply(myNumberArr);
            myNumberArr = [...result];
        } else if (sign === "divide"){
            result[0] = divide(myNumberArr);
            myNumberArr = [...result];
        }
    
        console.log(result[0]);
    }
}

// equal.addEventListener("click", function


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



