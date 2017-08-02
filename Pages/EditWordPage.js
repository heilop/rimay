// Import FuseJS' Observable module.
var Observable = require("FuseJS/Observable");

// Variables will be use.
var title = Observable('Register a new Word');
var words = Observable();
var location = words.map(function(x) { return x.location; });
var usefulRating = words.map(function(x) { return x.usefulRating; });
var comments = words.map(function(x) { return x.comments; });
var word = words.map(function(x) { return x.word; });

// Expose the variables to Vview.
module.exports = {
  title: title,

  word: word,
  location: location,
  usefulRating: usefulRating,
  comments: comments
}
