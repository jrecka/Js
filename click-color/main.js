document.body.addEventListener('click', () => {
    console.log(event.clientX, event.clientY);
    const getColor = (event) => {
        if( event.clientX % 2 !== 0 && event.clientX % 2 !== 0 ) {
            return 'blue'
        } else {
            return 'green';
        }
    } 
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})