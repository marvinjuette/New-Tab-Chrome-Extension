if (debugMode) console.log("Debug: greetings() called");
if (h >= 4 && h < 12) document.getElementById('period').innerText = "morning,";
else if (h >= 12 && h < 14) document.getElementById('period').innerText = "day,";
else if (h >= 14 && h < 18) document.getElementById('period').innerText = "afternoon,";
else if (h >= 18 && h < 24) document.getElementById('period').innerText = "evening,";
else document.getElementById('period').innerText = "night,";