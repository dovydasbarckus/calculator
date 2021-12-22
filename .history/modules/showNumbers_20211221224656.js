
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.numbers = [];
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.numbers.push(number);
            this.id.textContent = number;
        } else {
            console.log(this.numbers)

            this.id.textContent += " " + signSymbol + " " + number;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}