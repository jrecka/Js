const sliderList = [{
    img: "images/img1.jpg",
    text: "First text"
}, 
{
    img: "images/img2.jpg",
    text: "Second text"
}, 
{
    img: "images/img3.jpg",
    text: "Third text"
}];

const image = document.querySelector('img');
const text = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')];
const time = 2000;
let active = 0;

const changeDot = () => {
    const activeDot =  dots.findIndex(dot => dot.classList.contains('active'));
        dots[activeDot].classList.remove('active');
        dots[active].classList.add('active');
    }
const changeSlide = () => {
    active++;
    if(active === sliderList.length) active = 0;
    image.src = sliderList[active].img;
    text.textContent = sliderList[active].text;
    changeDot();

}
setInterval(changeSlide, time);