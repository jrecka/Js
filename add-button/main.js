const button = document.querySelector('button');
const input = document.querySelector('input');
let number = 1;
const list = document.createElement('ul');
document.body.appendChild(list);
const addToLi = (e) => {
    e.preventDefault();
    const newElement = input.value;
    const newElementLi = document.createElement('li');
    if ( input.value.length ) {
        
        list.appendChild(newElementLi);
        newElementLi.textContent =  newElement;
    }
    if ( number%2 == 0 ) {
        newElementLi.classList.add('big');
    }
    number++;
}
button.addEventListener('click', addToLi);