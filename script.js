//script for Shtuff.html

//Definitions
const body = document.getElementById("body");
const auto = document.getElementById("auto");
const timeDisplay = document.getElementById("timeDisplay");
const H1 = document.getElementById("H1");
const colors = ["red", "green", "blue", "black", "yellow", "purple", "pink", "brown", "orange", "white", "grey", "lightgrey"];
let seizure;
let strobe;
let nodie;

//Setup
setInterval(updateTime, 100)

auto.addEventListener("click", strobeLights)

//reloads the window
function reload() {
	window.location.reload();
}

//gets random number then picks random element from colors list, sets H1 to that new color
function randomColor() {
	let randomNumber = Math.floor((Math.random() * colors.length));
	let randomColor = colors[randomNumber];
	return randomColor;
}

//Checks if current color is the one taken from randomColor() and then changes it based off that
function updateColor() {
	if (typeof previous === "undefined") {
		previous = "black";
	}
		
	let current = randomColor();
	if(!previous) {
		previous = "black";
	}
	if (current == previous) {
		updateColor()
	} else {
		previous = current;
		H1.style.color = current;

		if(nodie == false) {
			body.style.background = current;
			H1.style.color = "black";
		}
	}
}

//Updates timeDisplay's text to show Date()
function updateTime() {
	timeDisplay.innerHTML = Date();
}

//seizure
function strobeLights() {
	if (seizure) {
		clearInterval(seizure)
		seizure = null;
		nodie = true;
		body.style.background = "darkgray";
		return;
	}
	
	if (!seizure) {
		answer = prompt("Yes or No");
		if (answer == "Yes" || answer == "yes") {
			seizure = setInterval(updateColor, 25);
			nodie = false;
		} else if (answer == "No" || answer == "no") {
			alert("Pedro does not care.")
			nodie = false;
			seizure = setInterval(updateColor, 25);
		} else if (answer == "420") {
			return;
		}	else {
				alert("Please enter Yes or No")
				strobeLights()
		}
	}
}

function endAuto() {
	clearInterval(seizure)
	clearInterval(strobe)
	seizure = null;
	strobe = null;
	nodie = true;
	body.style.background = "darkgray";
}

function basicStrobe() {
	if (strobe) {
		clearInterval(strobe)
		strobe = null;
		return;
	}
	
	if (!strobe) {
		strobe = setInterval(updateColor, 25);
	}
}
