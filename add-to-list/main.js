let size = 10;
let orderElement = 1;

const init = () => {
    const container = document.createElement('div');
    const button = document.createElement('button');
    const buttonReset = document.createElement('button');
    const list = document.createElement('ul');
    
    document.body.appendChild(container);
    container.appendChild(button);
    container.appendChild(buttonReset);
    container.appendChild(list);

    button.textContent = 'add 10 elements to the list';
    buttonReset.textContent = 'clean the list';
    button.classList.add('button');
    buttonReset.classList.add('buttonReset');
    button.addEventListener('click', createLiElements);
    buttonReset.addEventListener('click', cleanList);
}

const cleanList = () => {
    const list = document.querySelectorAll('li');
    list.forEach(element => {
        element.parentNode.removeChild(element);
        orderElement = 1;
        size = 10;
    });
}

const createLiElements = () => {
    const list = document.querySelector('ul');
    for( let i = 0; i<10; i++ ) {
        const listElement = document.createElement('li');
        listElement.textContent = `element ${orderElement}`;
        list.appendChild(listElement);
        listElement.style.fontSize = `${size}px`;
        orderElement++;
    }
    size +=10;
}

init()