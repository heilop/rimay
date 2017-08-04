// Import FuseJS' Observable module.
//var Observable = require("FuseJS/Observable");
//var title = Observable('Register a new Word');
var Context = require("Modules/Context");
// Variables will be use.
var words = this.Parameter;

var location = words.map(function(x) { return x.location; });
var usefulRating = words.map(function(x) { return x.usefulRating; });
var comments = words.map(function(x) { return x.comments; });
var word = words.map(function(x) { return x.word; });

function goBack() {
	// Return to Previus Page
	router.goBack();
}

function save() {
	Context.updateWord(word.value.id, word.value, location.value, usefulRating.value, comments.value);
	router.goBack();
}

function cancel() {
	// Refresh word value to reset dependent Observables' values.
	word.value = word.value;
	router.goBack();
}

// Expose the variables to Vview.
module.exports = {
  //title: title,

  word: word,
  location: location,
  usefulRating: usefulRating,
  comments: comments,

  goBack: goBack,

	cancel: cancel,
  save: save
}
