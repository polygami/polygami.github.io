var navButton = document.getElementById("navButton");
var icon = navButton.getElementsByTagName("i")[0];
var header = document.getElementsByTagName("header")[0];
var nav = document.getElementsByTagName("nav")[0];
var navList = nav.getElementsByTagName("ul")[0];


var navOpen = false;

navButton.onclick = function toggleNav() {
	icon.classList.toggle("fa-bars");
	icon.classList.toggle("fa-times");
	header.classList.toggle("hidden");
	navList.classList.toggle("hidden");
}
