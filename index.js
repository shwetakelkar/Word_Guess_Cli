const chalk = require('chalk');
var Word = require("./word.js");
var inquirer = require("inquirer");

var wordToGuess = "node package";
var word = new Word(wordToGuess);

var counter = wordToGuess.length;

function guessTheWord(){
    if(counter > 0){
        inquirer.prompt([
            {
                message:"Guess the word?",
                name:"userInput"

            },
            ]).then(function(result){
                
                word.checkTheWord(result.userInput);
                var str = word.returnWord(result.userInput);
                console.log("\n"+str+"\n");
                if(str.includes(result.userInput)){
                    console.log("\n"+chalk.green("correct!!")+"\n");
                }
                else{
                    console.log("\n"+chalk.red("Incorrect!!")+"\n");
                    console.log("\n"+"Only "+counter+ " guesses remaining!!"+"\n")
                }
                if(str.includes(" _ ")){
                    counter--;
                
                    guessTheWord();
                }
                else{
                    console.log("\n"+"You got it right!!"+"\n");

                }
                
                
            })
        
    }
    else{
        console.log("\n"+"Sorry, no guesses are available!!")
    }
}
function defaultDisplay(){
    var defaultStr="";
    [...wordToGuess].forEach(function(c) {
        if(c !== " ")
            defaultStr+=" _ "
        else 
            defaultStr+="  "
    });

    console.log("\n"+defaultStr+"\n"+"\n");
    guessTheWord();
}
defaultDisplay();


