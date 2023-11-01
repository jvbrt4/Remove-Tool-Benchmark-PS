#target photoshop

#target photoshop

var actionName = "Remove Tool Benchmark";
var actionSet = "Remove Tool Benchmark";
var timesToRun = 2;
var totalTime = 0;

for (var i = 0; i < timesToRun; i++) {
    var startTime = new Date().getTime();
    app.doAction(actionName, actionSet);
    var endTime = new Date().getTime();
    var runTime = endTime - startTime;
    totalTime += runTime;
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); // Close the new document without saving changes
}

var averageTime = totalTime / timesToRun;
var averageTimeInSeconds = averageTime / 1000;
averageTimeInSeconds = averageTimeInSeconds.toFixed(2); // Round to two decimal places
alert("Average time: " + averageTimeInSeconds + " s");
