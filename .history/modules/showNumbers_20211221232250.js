
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.text = "";
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
            this.text = this.numbers[this.numbers.length-1];
            this.numbers.push(number);
        } else {
            this.numbers.pop();
            this.numbers.push(number);
            for (let n of this.numbers){
                console.log(n)
            }
            // this.id.textContent += this.numbers[this.numbers.length-1]
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}