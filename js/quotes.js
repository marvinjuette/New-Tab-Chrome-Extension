if (debugMode) console.log("Debug: newQuote() called");
date.setHours(0, 0, 0, 0);

if (isBirthday(date)) {
    let randomNumber = Math.floor(Math.random() * (quotesBirthday.length));
    document.getElementById('quote').innerText = quotesBirthday[randomNumber];
    if (debugMode) console.log("Debug: randomNumber=" + randomNumber + "; quote=" + quotesBirthday[randomNumber])
} else {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerText = quotes[randomNumber];
}

function isBirthday(date) {
    return date.getMonth() === birthday.getMonth() &&
        date.getDay() === birthday.getDay();
}