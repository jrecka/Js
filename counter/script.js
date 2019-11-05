const add = ( start = 0) => {
    let number = start;
    return () => {
        start == 0 ? number++ : number+=start;
        
        document.body.textContent = `aktualny stan licznika ${number}`;
    }
}
const counter = add();
const counterFrom5 = add(5);
counter;
document.addEventListener('click', counter);