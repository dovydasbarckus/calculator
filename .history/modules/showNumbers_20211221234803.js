
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

            let newSentence = this.id.textContent;
            let splited = newSentence.split("+").trim();

            // if(this.numbers[this.numbers.length-1] != number){
                
            //    
            // }
            
            console.log(splited );
            
            

        }
        
    }
    remove(){
        this.id.textContent = "";
    }
}