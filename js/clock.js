if (debugMode) console.log("Debug: time() called");
if (debugMode) console.log("Debug: date=" + date);

h = checkTime(h);
m = checkTime(m);

if (debugMode) console.log("Debug: h=" + h + "; m=" + m);

document.getElementById('clock').innerHTML = h + ":" + m;

function checkTime(i) {
    if (debugMode) console.log("Debug: checkTime() called");
    if (i < 10) {
        i = "0" + i;
    }
    if (debugMode) console.log("Debug: i=" + i);
    return i;
}