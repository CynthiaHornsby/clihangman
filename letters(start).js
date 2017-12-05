var NewWord = require("./word(start).js")

var Letter = function(letter) {

    this.letter = letter;
    this.result = [];

    var words = new NewWord;


    var arr = [];
    for (var i = 0; i < words.choice.length; i++) {
        arr.push(words.choice[i] = "_");
    }
    console.log(arr);


    if (words.choice.indexOf(letter) > -1) {
        for (var j = 0; j < words.choice.length; j++) {
            if (words.choice[j] === letter) {
                arr[j] = letter;
                console.log(arr);
            }
        }
    }
    else {
        console.log("Incorrect Letter.  Please guess again.");
        this.result.push("Incorrect");
        console.log(this.result);
    }

};

module.exports = Letter;
