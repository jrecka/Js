const listBtn = document.querySelectorAll('li button');
const listElement = document.querySelectorAll('li');
const removeElement = e => 
    e.target.parentNode.remove();
const crossOutElement = e => 
    e.target.classList.toggle('cross-out');
listElement.forEach( item => item.addEventListener('click', crossOutElement)); 
listBtn.forEach( item => item.addEventListener('click', removeElement));