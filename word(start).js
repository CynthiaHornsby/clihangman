var NewWord = function() {
    var words = ["Hello", "How", "Are", "You"];
    this.choice = words[Math.floor(Math.random() * words.length)];
    console.log(this.choice);
};


module.exports = NewWord;
