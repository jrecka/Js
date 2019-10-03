const div = document.querySelector('div');
document.body.addEventListener('mousemove', event => {
    div.textContent = `${event.clientX}, ${event.clientY}`;
    document.body.style.backgroundColor = `rgb(
        ${event.clientX/3}, 
        ${event.clientY/2},
        ${event.clientX/event.clientY * 20}
        )`
})