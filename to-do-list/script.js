const input = document.querySelector('input');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const listElements  = document.getElementsByTagName('li');
const taskNumber = document.querySelector('h1 span');
const taskNumberUpdate = () => taskNumber.textContent = listElements.length;

const removeElement = e => {
    e.target.parentNode.remove();
    taskNumberUpdate();
}
const crossOutElement = e => 
    e.target.classList.toggle('cross-out');

const searchTask = e => {
    const searchTxt = e.target.value.toLowerCase();
    let tasks = [...listElements];
    tasks = tasks.filter( li => li.textContent.toLocaleLowerCase().includes(searchTxt));
    list.textContent = "";
    tasks.forEach(li => list.appendChild(li));
    taskNumberUpdate();
}
const addTask = e => {
    e.preventDefault();
    const titleTask = input.value;
    if( titleTask === "" ) return;
    const task = document.createElement('li');
    task.innerHTML = titleTask + '<button>x</button>';
    list.appendChild(task);
    input.value = "";
    taskNumberUpdate();
    task.querySelector('button').addEventListener('click', removeElement);
    task.addEventListener('click', crossOutElement);
}

form.addEventListener('submit', addTask);
input.addEventListener('blur', searchTask);