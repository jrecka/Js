const input = document.getElementById('pass');
const paragraph = document.querySelector('p');
const passwords = ['password', 'pumpkin'];
const messages = ['Every day is a new day', 'Happy Halloween'];

input.addEventListener('keyup', e => {
    const text = e.target.value;
    
    paragraph.style.display = 'none';
    passwords.forEach( (password, index) => {
        if ( password === text ) {
            
            paragraph.setAttribute('style', 'display:block !important');;
            paragraph.textContent = messages[index];
        }
    } )
}  
    );
