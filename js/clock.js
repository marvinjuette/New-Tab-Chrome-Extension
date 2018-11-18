// set the clock to the date const, clock will aperar instantly
let hrs = reformatHours(h)
let mts = reformatMiuntes(m)

if(debugMode) console.log("h="+h)
if(debugMode) console.log("m="+m)

document.getElementById('clock').innerHTML = hrs + ":" + mts

//reformat time 11:5 --> 11:05
function reformatHours(hours) {
	if(debugMode) {
		console.log("reformatHours(): called") 
		console.log("reformatHours(): hours="+hours)
	}
	if(hours < 10) return "0" + hours
	else return hours
}

function reformatMiuntes(minutes) {
	if(debugMode) {
		console.log("reformatMiuntes(): called")
		console.log("reformatMiuntes(): minutes="+minutes) 
	}
	if(minutes < 10) return "0" + minutes
	else return minutes
}

// This functions shows the clock on the page
function updateTime() {
	if(debugMode) console.log("updateTime(): called")	

	let current_date = new Date()
	let hours = current_date.getHours()
	let minutes = current_date.getMinutes()
	if(debugMode) {
		console.log("updateTime(): date=" + date)
		console.log("updateTime(): hours=" + hours)
		console.log("updateTime(): minutes=" + minutes)
	}
	
	hours = reformatHours(hours)
	minutes = reformatMiuntes(minutes)
	
	document.getElementById('clock').innerHTML = hours + ":" + minutes
}

//rerun the code to keep the clock up to date
setInterval(updateTime, 1000)