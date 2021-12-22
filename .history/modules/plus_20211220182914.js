
export default class Plus{
    constructor(number1, number2){
        this.number1 = number1;
        this.number2 = number2;
    }
    plus(){
        let sum = this.number1 + this.number2;
        console.log(sum);
    }
}