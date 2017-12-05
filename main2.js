var Word = require("./word2.js");
var inquirer = require("inquirer");

var wordChoices = [
    "apple",
    "banana"
];
var currentWord;
var numGuesses;

function guessLetter() {
    if (numGuesses > 0) {
        inquirer.prompt([{
                "message": "Guess a letter:",
                "name": "letter"
            }])
            .then(function(userInput) {
                currentWord.exposeLetter(userInput.letter);
                if (currentWord.isExposed()) {

                    inquirer.prompt([{
                            type: "list",
                            message: "Play again?",
                            list: ["Yes", "No"],
                            name: "again"
                        }])
                        .then(function(reply) {

                            if (reply.again === "Yes") {
                                newGame();
                            }
                            else {
                                return false;
                            }

                        });

                }
                else {
                    numGuesses--;
                    guessLetter();
                }
            });
    }
    else {

        inquirer.prompt([{
                type: "list",
                message: "Play again?",
                list: ["Yes", "No"],
                name: "again"
            }])
            .then(function(reply) {

                if (reply.again === "Yes") {
                    newGame();
                }
                else {
                    return false;
                }

            });
    }
}

function newGame() {
    numGuesses = 10;
    currentWord = new Word(wordChoices[0]);
    guessLetter();
}

newGame();
