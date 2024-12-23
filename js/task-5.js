const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');

button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    bgColor.textContent = randomColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
