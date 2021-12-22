import ShowNumbers from "./showNumbers.js";
import {showValues} from "../index.js";

export default function totalValue(newScreen, result, screen2, secondNumber, sign){
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
    sign = null;
    // showValues.remove();
    // sign = null;
    
}