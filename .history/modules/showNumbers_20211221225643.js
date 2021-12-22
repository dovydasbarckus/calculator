
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.numbers = [];
       
    }
    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " " + number;
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.numbers.push(number);
            this.id.textContent = this.numbers[this.numbers.length-1];
        } else {
            console.log(this.numbers)

            this.id.textContent += " " + signSymbol + " " + number;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}