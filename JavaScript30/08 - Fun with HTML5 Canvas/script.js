const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (event) {
    if (!isDrawing) return; // stops the function when mouse isn't down
    console.log(event);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // move to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];

    hue++;

    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >=60 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
