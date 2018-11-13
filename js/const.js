// personal options
const name = "Marvin";
const birthday = new Date(2001, 9, 7); //Jahr, Monat (Januar = 0, ..., Dezember = 11), Tag

// developer options
const debugMode = false;
const numberOfBackgroundImages = 4;

const date = new Date()
const h = date.getHours()
const m = date.getMinutes()

const quotes = [
// current date/time
// quotes,
    'What is your Focus today?',
    'Have a great day.',
    'Enjoy your time.'
];

// quotes for birthday
const quotesBirthday = [
    'Happy Birthday!',
    'All the best for your birthday.',
    'Have a very special day.'
];

//debug outpus
if(debugMode) {
	console.log("name="+name)
	console.log("birthday="+birthday)
	console.log("date="+date)
	console.log("debugMode="+debugMode)
	console.log("numberOfBackgroundImages="+numberOfBackgroundImages)
	console.log("date="+date)
	console.log("h="+h)
	console.log("quotes="+quotes)
	console.log("quotesBirthday="+quotesBirthday)
}