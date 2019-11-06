const textDiv = document.querySelector('.text>span');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const startTxt = () => startBtn.textContent = 'start';
const print = () =>
    textDiv.textContent = (time/100).toFixed(2);
let time  = 0;
let active = false;
let countTime;

const counter = () => {
    if (!active) {
        active = !active;
        countTime  = setInterval(start, 10);
        startBtn.textContent = 'pauza';
    } else {
        active = !active
        clearInterval(countTime);
        startTxt();
    }
}

const start = () => {
        time++;        
        print();
}

const reset = () => {
    time = 0;
    active = false;
    startTxt();
    clearInterval(countTime);
    print();
}
startBtn.style.textTransform = 'uppercase';
startBtn.addEventListener('click', counter);
resetBtn.addEventListener('click', reset);