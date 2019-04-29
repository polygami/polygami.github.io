var completedDays = 3;
var cards = document.getElementsByClassName("card");

var progressBar = document.getElementById("progress-inner");
var progressText = progressBar.getElementsByTagName("h4")[0];
var percentageComplete = completedDays.toString() + "%";

// Iterates through all card elements and adds images based on whether or not that day is completed. 
// If it has been completed, it will generate a path based on a naming convention.
// If it hasn't it will add a default filler image. 
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
}

setTimeout(function(){
	progressBar.style.width = percentageComplete;
	progressText.style.opacity = 1;
	progressText.innerHTML = completedDays;
}, 1000);
