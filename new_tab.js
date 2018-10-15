const numberOfBackgroundImages = 4;
const birthday = new Date(2001, 9, 7);
const quotes = [
    'What is your Focus today?',
    'Have a great day.',
    'Enjoy your time.'
];

const quotesBirthday = [
    'Happy Birthday!',
    'All the best for your birthday.',
    'Have a very special day.'
];

function background() {
    let randomNumber = Math.floor(Math.random() * numberOfBackgroundImages) + 1;
    if(randomNumber < 10) randomNumber = "0" + randomNumber;
    document.body.style.backgroundImage = "url(images/bg" + randomNumber + ".png)";
    console.log("Debug: image=bg" + randomNumber + ".png");
}

function time() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    h = checkTime(h);
    m = checkTime(m);

    document.getElementById('clock').innerHTML = h + ":" + m;
}

function checkTime(i) {
    if(i<10) { i = "0" + i; }
    return i;
}

function greetings() {
    let date = new Date();
    h = date.getHours();
    if(h>=4 && h<12) document.getElementById('period').innerText = "morning,";
    else if(h>=12 && h<14) document.getElementById('period').innerText = "day,";
    else if(h>=14 && h<18) document.getElementById('period').innerText = "afternoon,";
    else if(h>=18 && h<24) document.getElementById('period').innerText = "evening,";
    else document.getElementById('period').innerText = "night,"

}

function newQuote() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);

    if(isBirthday(date)) {
        let randomNumber = Math.floor(Math.random() * (quotesBirthday.length));
        document.getElementById('quote').innerText = quotesBirthday[randomNumber];
        console.log("Debug: randomNumber=" + randomNumber + "; quote=" + quotesBirthday[randomNumber])
    } else {
        let randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quote').innerText = quotes[randomNumber];
    }
}

function isBirthday(date) {
    return date.getMonth() === birthday.getMonth() &&
        date.getDay() === birthday.getDay();
}