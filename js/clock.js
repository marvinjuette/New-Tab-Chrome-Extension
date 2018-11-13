// set the clock to the date const, clock will aperar instantly
document.getElementById('clock').innerHTML = h + ":" + m

// This functions shows the clock on the page
function updateTime() {
	if(debugMode) console.log("Debug: updateTime() called")	

	let current_date = new Date()
	let hours = current_date.getHours()
	let minutes = current_date.getMinutes()
	if(debugMode) {
		console.log("date=" + date)
		console.log("hours=" + hours)
		console.log("minutes=" + minutes)
	}
	
	if(hours < 10) {
		hours = "0" + hours
		if(debugMode) console.log("hours: " + hours)
	}
	if(minutes < 10) {
		minutes = "0" + minutes
		if(debugMode) console.log("minutes: " + minutes)
	}
	
	document.getElementById('clock').innerHTML = hours + ":" + minutes
}

//rerun the code to keep the clock up to date
setInterval(updateTime, 1000)