
export default class ShowNumbers{
    constructor(id){
        this.id = id;
    }

    showSign(signSymbol){
        this.id.textContent += " " + signSymbol + " ";
    }
    show(signSymbol, number){
        if (signSymbol === ""){
            this.id.textContent = number;
        } else {
            let sentence = this.id.textContent;
            let splited = sentence.split(" ");
            splited.pop();
            splited.push(number);
            let content = splited.join(" ")
            this.id.textContent = content;

        } 
    }
    removeNumber(num1, num2){
        if (num2 === ""){
            this.id.textContent = num1;
        } else{
            let sentence = this.id.textContent;
            let splited = sentence.split(" ");
            let removedOneValue = splited[splited.length-1];
            console.log(num2)
            console.log(splited[splited.length-1]);
        }
       
        
        // let sentence = this.id.textContent;
        // let splited = sentence.split("");
        // splited.pop();
        // // splited.push(number);
        // let content = splited.join(" ")
        // // this.id.textContent = content;
        // console.log(content );
    }
    remove(){
        this.id.textContent = "";
    }
}
