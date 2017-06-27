const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; // 100px

function shadow(event) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = event;

    if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 red,
        ${xWalk * -1}px ${yWalk}px 0 blue,
        ${xWalk}px ${yWalk * -1}px 0 green
        `;
}

hero.addEventListener('mousemove', shadow);
