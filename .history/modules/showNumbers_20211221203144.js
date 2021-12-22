
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(number){
        this.id.textContent = number;

        if (newScreen === null){
            newScreen = document.createElement("div");
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
    }
}