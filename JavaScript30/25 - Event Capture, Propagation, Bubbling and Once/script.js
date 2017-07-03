const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
    console.log(this.classList.value);

    // event.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('BUTTON CLICKED!');
}, {
    once: true
});
