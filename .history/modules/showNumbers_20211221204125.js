
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else{
            this.id.textContent = signSymbol + " " + number;
        }
        
    }
}