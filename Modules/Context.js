var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var words = Observable();

Backend.getWords()
	.then(function(newWords) {
		words.replaceAll(newWords);
	})
	.catch(function(error) {
		console.log("Couldn't get words: " + error);
	});
