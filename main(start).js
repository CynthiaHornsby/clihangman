var Letter = require("./letters(start).js")
var inquirer = require("inquirer")

var count = 8;

var GuessLetter = function() {

    if (count > 0) {

        inquirer.prompt([{
            type: "input",
            message: "Guess a Letter:",
            name: "letter"
        }]).then(function(response) {

            var guess = new Letter(
                response.letter,
                response.result,
                response.words
            );


            if (guess.result[0] === "Incorrect") {
                count--;
                console.log("Guesses Remaining: " + count);
            }

            GuessLetter();

        });


    }

};

GuessLetter();
