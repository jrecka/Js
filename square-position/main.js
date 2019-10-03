const div = document.querySelector('div');
let divX = 150;
let divY = 50;

div.style.width = '150px';
div.style.height = '150px';
div.style.backgroundColor = 'black';
div.style.position = 'fixed';
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener('mousedown', () => {
    div.style.backgroundColor = 'grey';
    div.addEventListener('mousemove', (event) => {
        divX = event.clientX;
        divY = event.clientY;
        div.style.left = `${divX - 50}px`;
        div.style.top = `${divY - 50}px`;
        
    })
})
div.addEventListener('mouseup', () => {
    div.style.backgroundColor = 'black';
})
