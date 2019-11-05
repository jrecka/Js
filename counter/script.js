const counter = () => {
    let number  = 0;
    const  print =  () => {
        number++;
        document.body.textContent = `You are ${number} seconds on this page`;
    }
    return print
}
const start = counter();
setInterval(start, 1000);