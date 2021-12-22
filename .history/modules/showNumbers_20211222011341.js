
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
            this.numbers.push(number);
            this.id.textContent = this.numbers[this.numbers.length-1];
        } else {
            if(number.length < 1){
                this.numbers.push(number);
                this.id.textContent += this.numbers[this.numbers.length-1]
            } else{
                let sentence = this.id.textContent;
                let splited = sentence.split(" ");
                splited.pop();
                splited.push(number);
                let content = splited.join(" ")
                this.id.textContent = content;
            }
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}