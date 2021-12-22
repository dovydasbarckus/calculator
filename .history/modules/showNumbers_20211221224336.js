
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.check = true;
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else if (check){
            console.log(number)
            this.id.textContent += " " + signSymbol + " " + number;
        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}