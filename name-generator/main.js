const btn = document.querySelector('button');
const name = document.querySelector('.name');
const names = [ "Clement", "Patrick", "Rebbecca", "Servin", "Felipa", "Moise", "Amberly", "Crick", 
    "Mitsuko", "Miura", "Corrin", "Mitchell", "Kellam", "Tona", "Stgermain", "Lela", "Burford",
    "Hilda", "Margolin" ];
    
const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    console.log(names[index]);
    name.textContent = `The best name is ${names[index]}`;
}

btn.addEventListener('click', nameGenerator);