
// import * as greeting from "./modules/plus.js";
// const myName = "dovis";
// greeting.test(myName);

// import Plus from "./modules/plus";

const myNumbers = [];

const numbers = document.getElementsByClassName("number");

for (let i = 0; i <numbers.length; i++ ){
    numbers[i].addEventListener("click", function(e){
        console.log(e.target.attributes.value.nodeValue);
    })
}

const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const percentages = document.querySelector(".percentages");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

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



