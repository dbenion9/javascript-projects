// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {
    const liftoffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const flightStatus = document.getElementById('flightStatus');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const rocket = document.getElementById('rocket');
    
    liftoffButton.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for takeoff.')) {
            flightStatus.innerText = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
        }
    });

    landButton.addEventListener('click', function() {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerText = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerText = 0;
        rocket.style.top = '50%';
        rocket.style.left = '50%';
    });

    abortButton.addEventListener('click', function() {
        if (confirm('Confirm that you want to abort the mission.')) {
            flightStatus.innerText = 'Mission aborted';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerText = 0;
            rocket.style.top = '50%';
            rocket.style.left = '50%';
        }
    });

    upButton.addEventListener('click', function() {
        moveRocket(0, -10);
        spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
    });

    downButton.addEventListener('click', function() {
        moveRocket(0, 10);
        spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) - 10000;
    });

    leftButton.addEventListener('click', function() {
        moveRocket(-10, 0);
    });

    rightButton.addEventListener('click', function() {
        moveRocket(10, 0);
    });

    function moveRocket(dx, dy) {
        let left = parseInt(rocket.style.left.replace('px', '')) + dx;
        let top = parseInt(rocket.style.top.replace('px', '')) + dy;
        rocket.style.left = `${left}px`;
        rocket.style.top = `${top}px`;
    }
});
