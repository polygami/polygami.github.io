var visibleTags = new Set();

var tagButtons = document.getElementsByClassName("tag");

initializeTagsList();

function initializeTagsList(){
	for (let index = 0; index < tagButtons.length; index++) {
		const element = tagButtons[index];
		visibleTags.add(element.innerText);
	}
}

var cards = document.getElementsByClassName("card");

function toggleTag(element) {
	var tag = element.innerText;
	var classList = element.classList;
	classList.toggle("tag-disabled");
	classList.contains("tag-disabled") ? visibleTags.delete(tag) : visibleTags.add(tag);
	console.log(visibleTags);
	hideCards();
}

function hideCards() {
	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		console.log(card.classList);
		var isMatchFound = false;
		visibleTags.forEach(function(element) {
			if (card.classList.contains(element)) {
				isMatchFound = true;
			}
		})
		isMatchFound ? card.hidden = false : card.hidden = true;
	}
}