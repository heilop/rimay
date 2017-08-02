var wordList = require("words");

function gotToWord(arg) {
  var word = arg.data;
  router.push('editWord', word);
}

// Expose the variables to Vview.
module.exports = {
  // title: title,
  wordList: wordList,
  //
  // word: word,
  // location: location,
  // usefulRating: usefulRating,
  // comments: comments,

  gotToWord: gotToWord
}
