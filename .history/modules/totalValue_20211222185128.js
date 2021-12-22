
export default function totalValue(){
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