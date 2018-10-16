// debug output
if (debugMode) console.log("Debug: background() called");

// choose random background
let randomNumber = Math.floor(Math.random() * numberOfBackgroundImages) + 1;
if (randomNumber < 10) randomNumber = "0" + randomNumber;
document.body.style.backgroundImage = "url(images/bg" + randomNumber + ".png)";

// debug output
if (debugMode) console.log("Debug: image=bg" + randomNumber + ".png");