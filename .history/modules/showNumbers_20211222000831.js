
export default class ShowNumbers{
    constructor(id){
        this.id = id;
        this.numbers = [];   
    }

    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " ";
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.numbers.push(number);
            this.id.textContent = this.numbers[this.numbers.length-1];
            this.numbers.push("");
        } else {
            this.numbers.pop();
            this.numbers.push(number);
            this.id.textContent += this.numbers[this.numbers.length-1]
            let sentence = this.id.textContent;
            let splited = sentence.split("");
            console.log(splited)
           

            // for (let n of this.numbers){
            //     this.id.textContent += n + ""

            // }
            
            
            

        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}