const input = document.getElementById('pass');
const paragraph = document.querySelector('p');
const passwords = ['password', 'pumpkin'];
const messages = ['Every day is a new day', 'Happy Halloween'];

paragraph.style.display = 'none';

input.addEventListener('keyup', e => {
    const text = e.target.value;
    
    passwords.forEach( (password, index) => {
        if ( password === text ) {
            paragraph.style.display = "block";
            paragraph.textContent = messages[index];
        }
    } )
}  
    );
