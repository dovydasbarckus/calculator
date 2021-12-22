
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }
    show(number){
        this.id.textContent = number;
    }
}