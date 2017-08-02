// Import FuseJS' Observable module.
var Observable = require("FuseJS/Observable");
var wordList = require("words");
// Variables will be use.
var title = Observable('Register a new Word');
var words = Observable();
var location = words.map(function(x) { return x.location; });
var usefulRating = words.map(function(x) { return x.usefulRating; });
var comments = words.map(function(x) { return x.comments; });
var word = words.map(function(x) { return x.word; });

function chooseWord(arg) {
  words.value = arg.data;
}


// Expose the variables to Vview.
module.exports = {
  title: title,
  wordList: wordList,

  word: word,
  location: location,
  usefulRating: usefulRating,
  comments: comments,

  chooseWord: chooseWord
}
