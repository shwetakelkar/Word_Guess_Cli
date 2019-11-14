var Letter = require("./letter.js")

function Word(word){

    this.userInput = [];
    for (var i=0;i<word.length;i++){
        this.userInput.push(new Letter(word[i]));
    }
    
    this.returnWord = function(){
        var str ="";
        
        for(var i=0;i<this.userInput.length;i++){
            var letter = this.userInput[i];
            var val =letter.letterGuessed();
           
            str+=val+" ";
        }
         return str;
    }

    this.checkTheWord = function(char){
       for (var i=0;i<this.userInput.length;i++){
         var letter = this.userInput[i];
         letter.guess(char);
       }
        
    }
}

module.exports=Word;