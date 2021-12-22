import Equal from "./modules/equal.js";
import plus from "./modules/plus.js";
import minus from "./modules/minus.js";


const equal = document.querySelector(".equal");
const numbers = document.getElementsByClassName("number");
let myNumbers = "";
let myNumberArr = [];
const signs = document.getElementsByClassName("signs");
let sign = null;
let result = [];

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

equal.addEventListener("click", ()=>{
    

    if (myNumbers != ""){
        myNumberArr.push(Number(myNumbers));
        myNumbers = "";
    } 
    console.log(sign)

    if (sign === "plus"){
        result[0] = plus(myNumberArr);
        myNumberArr = [...result]
    } else if (sign === "minus") {
        result[0] = minus(myNumberArr)
        myNumberArr = [...result]
    } else if (sign === "multiply"){
        
    }

    console.log(result[0]);
    
})

const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const percentages = document.querySelector(".percentages");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
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



