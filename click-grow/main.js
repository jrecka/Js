// tutaj rozwiązanie
const button = document.querySelector('button');
// metoda querySelectorAll zawraca nam obj w postaci node list
const liArr = document.querySelectorAll('li');

let size = 10;

const showAndGrow = () => {
    // for (let i = 0; i < liArr.length; i++) {
    //     liArr[i].style.display = 'block';
    //     liArr[i].style.fontSize = `${size}px`;
    // }
        // ---------------------------------   
    
    liArr.forEach( li => {
        li.style.display = 'block';
        li.style.fontSize = `${size}px`;
    });
    size +=10;
    }
    button.addEventListener('click', showAndGrow);