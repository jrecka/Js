document.body.style.height = '100000px';

const squere = document.createElement('div');
document.body.appendChild(squere);

let size = 10;

// squere.style.backgroundColor = 'green';
squere.style.height = `${size}px`;
squere.style.position = 'fixed';
squere.style.left = 0;
squere.style.right = 0;

let grow = true;

const changeHeight = () => {
    if (size >= window.innerWidth/2) {
        grow = !grow
    } else if ( size <=0 ) {
        grow = !grow;
    } if (grow) {
        size += 10 
        squere.style.height = `${size}px`;
        squere.style.backgroundColor = 'green';

    
    } else {
        size -= 10 
        squere.style.height = `${size}px`;
        squere.style.backgroundColor = 'yellow';
        
    }
}

document.addEventListener('scroll', changeHeight);