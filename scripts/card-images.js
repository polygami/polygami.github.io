var cards = document.getElementsByClassName("card");

var completedDays = 2;
var imageURLs = [];

for (let index = 0; index < cards.length; index++) {
	card = cards[index];
	var img = document.createElement("img");
	
	if (index >= completedDays) {
		img.setAttribute("src", "/images/day-thumbnails/incomplete.jpg");
	} else {
		dayNumber = (index + 1).toString().padStart(3, '0');
		var path = "/images/day-thumbnails/100-doc-thumb-" + dayNumber + ".jpg";
		img.setAttribute("src", path)
	}
	
	card.prepend(img);
	// cards[index].style.backgroundImage = "url('/images/day-thumbnails/100-doc-thumb-" + dayNumber + ".jpg')";
	// cards[index].style.backgroundImage = "url('/images/day-thumbnails/100-doc-thumb-001.jpg')";
}


// background-image: url('/images/day-thumbnails/100-doc-thumb-001.jpg');
