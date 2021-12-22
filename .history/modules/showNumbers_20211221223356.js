
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else{
            console.log(number)
            this.id.textContent += " " + signSymbol + " " + number;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}