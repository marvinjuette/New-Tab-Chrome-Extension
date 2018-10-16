// debug output
if (debugMode) console.log("Debug: time() called");
if (debugMode) console.log("Debug: date=" + date);

// format clock
h = checkTime(h);
m = checkTime(m);

// debug output
if (debugMode) console.log("Debug: h=" + h + "; m=" + m);

// show clock on page
document.getElementById('clock').innerHTML = h + ":" + m;

// reformat time (h=9,m=5 --> h=09, m=05)
function checkTime(i) {
    if (debugMode) console.log("Debug: checkTime() called");
    if (i < 10) {
        i = "0" + i;
    }

    // debug output
    if (debugMode) console.log("Debug: i=" + i);
    return i;
}