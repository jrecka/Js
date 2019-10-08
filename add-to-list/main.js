let size = 10;
let orderElement = 1;

const init = () => {
    const container = document.createElement('div');
    const button = document.createElement('button');
    const buttonReset = document.createElement('button');
    const buttonRemove = document.createElement('button');
    const buttonInfo = document.createElement('button');
    const list = document.createElement('ul');

    
    document.body.appendChild(container);
    container.classList.add('container');
    list.classList.add('list-group');
    container.appendChild(button);
    container.appendChild(buttonRemove);
    container.appendChild(buttonReset);
    container.appendChild(buttonInfo);
    container.appendChild(list);

    button.textContent = 'add';
    buttonReset.textContent = 'clean';
    buttonRemove.textContent = '-1';
    buttonInfo.textContent = 'info';
    button.classList.add('btn');
    buttonRemove.classList.add('btn');
    buttonReset.classList.add('btn');
    buttonInfo.classList.add('btn');
    button.addEventListener('click', createLiElements);
    buttonRemove.addEventListener('click', removeOne);
    buttonReset.addEventListener('click', cleanList);
}
const removeOne = () => {
    const list = document.querySelectorAll('li');
    // if have parentNode
    list[0].parentNode.removeChild(list[list.length - 1]);
    orderElement--;  
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
        listElement.classList.add('list-group-item-light');
        listElement.textContent = `element ${orderElement}`;
        list.appendChild(listElement);
        listElement.style.fontSize = `${size}px`;
        orderElement++;
    }
    size +=10;
}

init()