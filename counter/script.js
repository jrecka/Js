// const add = ( start = 0) => {
//     let number = start;
//     return () => {
//         start == 0 ? number++ : number+=start;
        
//         document.body.textContent = `aktualny stan licznika ${number}`;
//     }
// }
// const counter = add();
// const counterFrom5 = add(5);
// counter;
// document.addEventListener('click', counter);

const user = (name ="", age) => {
    let userName = name;
    let userAge = age;

    function showName () {
    const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    paragraph.textContent = `Hello ${userName}, ${userAge >= 18 ? 'you are adult' : 'you are not adult'}`;
}
return showName
}

const john = user('John', 22);
const mary = user('Mary', 30);
const linda = user('Linda', 12);
john();
mary();
linda();