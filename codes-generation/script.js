const chars = "ABCDEFGHIJKL0123456789!@#$%^&*()";

const btn = document.querySelector('button');
const section = document.querySelector('section');

codesNumber = 100;
charsNumber = 8;

const codeGenerator = () => {
    for ( let i = 0; i < codesNumber; i++ ) {
        let code = '';
        for ( let i = 0; i < charsNumber; i++ ) {
            const index = Math.floor( Math.random() * 20);
            code += chars[index];
        }
        const sectionElement = document.createElement('div');
        sectionElement.textContent = code;
        section.appendChild(sectionElement);
    }
        
}

btn.addEventListener('click', codeGenerator);