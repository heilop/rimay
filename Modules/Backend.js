var wordList = [
  {
    id: 0,
    word: "Tunche",
    location: "Amazonas, Peru",
    distance: 10.4,
    usefulRating: 4,
    comments: "This hike was nice and hike-like. Glad I didn't bring a bike."
  },
  {
    id: 1,
    word: "Ralo",
    location: "Amazonas, Peru",
    distance: 20.86,
    usefulRating: 3,
    comments: "Not the best, but would probably do again. Note to self: don't forget the sandwiches next time."
  },
  {
    id: 2,
    word: "Michuque",
    location: "Amazonas, Peru",
    distance: 8.2,
    usefulRating: 5,
    comments: "Short but SO sweet!!"
  },
  {
    id: 3,
    word: "Ishpa",
    location: "Amazonas, Peru",
    distance: 12.3,
    usefulRating: 4,
    comments: "Took my time with this one. Great view!"
  },
  {
    id: 4,
    word: "Choloque",
    location: "Amazonas, Peru",
    distance: 19.34,
    usefulRating: 2,
    comments: "Too long, too hot. Also that snakebite wasn't very fun."
  }
];

// Returns a Promise that represents an array of hike objects
function getWords() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(wordList);
    }, 500);
	});
}
// Returns a Promise that will be fulfilled when the hike is updated in the backend
function updateWord(id, word, location, usefulRating, comments) {
  return new Promise(function(resolve, reject) {
		setTimeout(function() {
      for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        if (word.id == id) {
          word.name = word;
          word.location = location;
          word.usefulRating = usefulRating;
          word.comments = comments;
          break;
        }
      }

      resolve();
		}, 0);
	});
}

module.exports = {
  getWords: getWords,
  updateWord: updateWord
}
