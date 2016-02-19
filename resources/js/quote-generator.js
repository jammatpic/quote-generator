var previousQuote = -1;

var quoteArray = [
	["Isn't it funny how day by day nothing changes, but when you look back, everything is different.", "C.S. Lewis"],
	["If Tetris has taught me anything, it's that errors pile up and accomplishments disappear.", "Unknown"],
	["The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.", "Bertrand Russell"],
	["And those who were seen dancing were thought to be insane by those who could not see the music.", "Friedrich Nietzsche"],
	["Never interrupt your enemy when he is making a mistake.", "Napoleon Bonaparte"],
	["If you're going through hell, keep going.", "Winston Churchill"],
	["I mean, they say you die twice. One time when you stop breathing, and a second time, when somebody says your name for the last time.", "Banksy"],
	["A society grows great when old men plant trees whose shade they know they shall never sit in.", "Greek Proverb"],
	["A life is like a garden. Perfect moments can be had, but not preserved, except in memory.", "Leonard Nimoy"]
];

function randomQuote() {
	var randInt = Math.floor(Math.random() * quoteArray.length);
    // ensuring the same quote doesn't get picked twice
	if (randInt == previousQuote) {
		plusOrMinus = Math.floor(Math.random() * 2);
		if (plusOrMinus === true || randInt == 0 && randInt != quoteArray.length) {
			randInt += 1;
		} else {
			randInt -= 1;
		}
	}

	previousQuote = randInt;
	return quoteArray[randInt];
}

function generateQuote() {
	quoteAndAuthor = randomQuote()
	$("#quote").html('<h2>"' + quoteAndAuthor[0] + '"</h2>'); // the quote itself
	$("#author").html("<h4>" + quoteAndAuthor[1] + "</h4>"); // the author
}

$(document).ready(function() {
	generateQuote();
	var tweetButton = document.querySelector(".twitter-share-button");
	var newTweetButton = document.createElement("a");
	newTweetButton.setAttribute("class", "twitter-share-button");
	newTweetButton.setAttribute("href", "https://twitter.com/intent/tweet");
	newTweetButton.setAttribute("data-url", " ");
	newTweetButton.setAttribute("data-text", quoteArray[previousQuote][0] + " - " + quoteArray[previousQuote][1]);
	tweetButton.parentNode.replaceChild(newTweetButton, tweetButton);

    // the tweet button has to be recreated everytime a new quote is generated
	$("#generateButton").on("click", function() {
		generateQuote();
		tweetButton = document.querySelector(".twitter-share-button");
		newTweetButton = document.createElement("a");
		newTweetButton.setAttribute("class", "twitter-share-button");
		newTweetButton.setAttribute("href", "https://twitter.com/intent/tweet");
		newTweetButton.setAttribute("data-url", " ");
		newTweetButton.setAttribute("data-text", quoteArray[previousQuote][0] + " - " + quoteArray[previousQuote][1]);
		tweetButton.parentNode.replaceChild(newTweetButton, tweetButton);
		twttr.widgets.load();
	});
});