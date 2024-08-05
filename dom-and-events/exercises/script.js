function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    // Task 1
document.getElementById('liftoffButton').addEventListener('click', function() {
    document.getElementById('status').innerText = 'Houston, we have liftoff!';
});

// Task 2
document.getElementById('abortMission').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});

// Task 3
document.getElementById('abortMission').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Task 4
document.getElementById('abortMission').addEventListener('click', function() {
    if (confirm('Are you sure you want to abort the mission?')) {
        document.getElementById('status').innerText = 'Mission aborted! Space shuttle returning home.';
    }
});

}

window.addEventListener("load", init);
