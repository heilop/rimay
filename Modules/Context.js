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

	function updateWord(id, word, location, usefulRating, comments) {
		for (var i = 0; i < words.length; i++) {
			var word = words.getAt(i);
			if (word.id == id) {
				word.name = word;
				word.location = location;
				word.usefulRating = usefulRating;
				word.comments = comments;
				words.replaceAt(i, word);
				break;
			}
		}
		Backend.updateWord(id, word, location, usefulRating, comments)
			.catch(function(error) {
				console.log("Couldn't update word: " + id);
			});
	}

	module.exports = {
		words: words,

		updateWord: updateWord
	};
