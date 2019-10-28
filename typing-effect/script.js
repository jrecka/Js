const spanText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? THE END';
const txt = ['la', 'la', 'lalala'];
let indexText = 0;
let activeLetter = -5;
let activeText = 0;
const time = 50;

// const addLetter = () => {
    // spanText.textContent += text[indexText];
    // indexText++;
    // if (indexText === text.length) clearInterval (indexTyping);
// }
const addLetter = () => {
    if (activeLetter >= 0) {
        spanText.textContent += txt[activeText][activeLetter]; 
    } 
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeLetter === txt.length) return;
        return setTimeout(() => {
            activeLetter = 0;
            spanText.textContent += ' ';
            addLetter();            
        }, 1000);
    }
        setTimeout(addLetter, 500);
}

addLetter();
const cursorAnimation = () => {
    cursor.classList.toggle('active');
}
// const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 500);