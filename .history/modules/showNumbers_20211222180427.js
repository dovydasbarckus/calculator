
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }

    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " ";
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else {
            
            let sentence = this.id.textContent;
            let splited = sentence.split(" ");
            splited.pop();
            splited.push(number);
            let content = splited.join(" ")
            this.id.textContent = content;
            console.log(splited )
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}
