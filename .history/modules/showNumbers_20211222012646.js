
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.numbers = [];   
    }

    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " ";
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            // this.numbers.push();
            this.id.textContent = number;
        } else {
            if(number.length < 2){
                // this.numbers.push(number);
                this.id.textContent += " " + signSymbol + " " + number;
            } else{
                
                let sentence = this.id.textContent;
                let splited = sentence.split(" ");
                splited.pop();
                splited.push(number);
                let content = splited.join(" ")
                this.id.textContent = content;
                console.log(sentence)
            }
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}