
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.numbers = [];
        this.signPlaced = false;
       
    }

    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " ";
        
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.numbers.push(number);
            this.id.textContent = this.numbers[this.numbers.length-1];
        } else {
            console.log(this.numbers)

            this.id.textContent += number;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}