const display = document.getElementsByClassName("display")[0];
let timer = null;
let startTIme = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTIme = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

    }

}
function stop() {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTIme;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    let startTIme = 0;
    let elapsedTime = 0;
    let isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTIme;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)% 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    
    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}