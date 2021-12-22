
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(sign, number){
        if (sign === ""){
            this.id.textContent = number;
        } else{
            this.id.textContent = sign + number;
        }
        
    }
}