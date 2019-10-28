const spanText = document.querySelector('.text');
const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? THE END';
let indexText = 0;

const addLetter = () => {
    spanText.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval (indexTyping);
}

const indexTyping = setInterval(addLetter, 50);