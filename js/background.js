if (debugMode) console.log("Debug: background() called");
let randomNumber = Math.floor(Math.random() * numberOfBackgroundImages) + 1;
if (randomNumber < 10) randomNumber = "0" + randomNumber;
document.body.style.backgroundImage = "url(images/bg" + randomNumber + ".png)";
if (debugMode) console.log("Debug: image=bg" + randomNumber + ".png");