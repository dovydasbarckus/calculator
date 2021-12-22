
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else{
            console.log(number)
            let newNumber = " " + signSymbol + " " + number;
            this.id.textContent += newNumber;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}