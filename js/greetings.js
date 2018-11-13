// debug output
if (debugMode) console.log("greetings() called");

// choose greeting after time
if (h >= 4 && h < 12) document.getElementById('period').innerHTML = "morning, " + name + ".";
else if (h >= 12 && h < 14) document.getElementById('period').innerHTML = "day, " + name + ".";
else if (h >= 14 && h < 18) document.getElementById('period').innerHTML = "afternoon, " + name + ".";
else if (h >= 18 && h < 24) document.getElementById('period').innerHTML = "evening, " + name + ".";
else document.getElementById('period').innerHTML = "night, " + name + ".";