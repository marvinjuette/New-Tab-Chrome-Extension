// debug output
if (debugMode) console.log("newQuote() called");
date.setHours(0, 0, 0, 0);

// if user have birthday today, use other quotes
if (isBirthday(date)) {
    let randomNumber = Math.floor(Math.random() * (quotesBirthday.length));
    document.getElementById('quote').innerText = quotesBirthday[randomNumber];
    if (debugMode) {
		console.log("randomNumber=" + randomNumber)
		console.log("quote=" + quotesBirthday[randomNumber])
	}
} else {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerText = quotes[randomNumber];
}

// check if the current day is the given birthday
function isBirthday(date) {
    return date.getMonth() === birthday.getMonth() &&
        date.getDay() === birthday.getDay();
}