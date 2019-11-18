const input = document.querySelector('input');
const list = document.querySelector('ul');
const listBtn = document.querySelectorAll('li button');
const listElement = document.querySelectorAll('li');

const removeElement = e => 
    e.target.parentNode.remove();
const crossOutElement = e => 
    e.target.classList.toggle('cross-out');
const searchTask = e => {
    const searchTxt = e.target.value.toLowerCase();
    let tasks = [...listElement];
    tasks = tasks.filter( li => li.textContent.toLocaleLowerCase().includes(searchTxt));
    list.textContent = "";
    tasks.forEach(li => list.appendChild(li));
}
input.addEventListener('input', searchTask);
listElement.forEach( item => item.addEventListener('click', crossOutElement)); 
listBtn.forEach( item => item.addEventListener('click', removeElement));
