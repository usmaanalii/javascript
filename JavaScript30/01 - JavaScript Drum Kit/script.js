function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // Stop the function running altogether
    if (!audio) {
        return;
    }

    audio.currentTime = 0; // rewind to the start
    audio.play();

    key.classList.add('playing');
}

function removeTransition(event) {

    // skip it if it's not a transform
    if (event.propertyName !== "transform") {
        return;
    }

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
