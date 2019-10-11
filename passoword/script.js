const input = document.getElementById('pass');
const paragraph = document.querySelector('p');
const password = 'password';

paragraph.style.display = 'none';

input.addEventListener('keyup', e => {
    password === e.target.value ?
    paragraph.style.display = "block" :
    paragraph.style.display = "none" 
    }  
    );