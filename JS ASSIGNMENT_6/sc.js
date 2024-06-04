let timer;
let elapsedTime = 0;
let running = false;
let paused = false;

function updateTime() {
    elapsedTime += 1;
    const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedTime % 60).padStart(2, '0');
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (!running) {
        timer = setInterval(updateTime, 1000);
        running = true;
        paused = false;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        document.getElementById('stop').disabled = false;
    }
}

function pause() {
    if (running) {
        if (paused) {
            timer = setInterval(updateTime, 1000);
            document.getElementById('pause').innerText = 'pause';
            paused = false;
        } else {
            clearInterval(timer);
            document.getElementById('pause').innerText = 'continue';
            paused = true;
        }
    }
}

function stop() {
    clearInterval(timer);
    running = false;
    paused = false;
    elapsedTime = 0;
    document.getElementById('time').innerText = '00:00:00';
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('stop').disabled = true;
    document.getElementById('pause').innerText = 'pause';
}
