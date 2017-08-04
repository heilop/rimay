var Context = require("Modules/Context");


function gotToWord(arg) {
  var word = arg.data;
  router.push('editWord', word);
}

// Expose the variables to Vview.
module.exports = {
  // title: title,
  wordList: Context.words,
  //
  // word: word,
  // location: location,
  // usefulRating: usefulRating,
  // comments: comments,

  gotToWord: gotToWord
}
