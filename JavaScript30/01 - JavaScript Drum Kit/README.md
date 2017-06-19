## Javascript Drum Kit

What I learned on this mini-project.

*******
### addEventListener

``` javascript
window.addEventListener('keydown', playSound);
```

This is used to attach an event handler to the window object. An event in this context is when "something happens to the window object".

- `keydown` is the event name
- `playSound` is the function that runs when the event happens

### querySelector & querySelectorAll

``` javascript
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

const keys = document.querySelectorAll('.key');
```

This will return the HTML element you trying to select (or all of them as a NodeList*), an example of what will be returned for `key` is shown below.

``` html
<div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
</div>

```

### classList

``` javascript
key.classList.add('playing');
key.classList.remove('playing');
key.classList.append('playing');
```

This quite simply adds classes like you would in jQuery with `key.addClass`.

### transitionend

``` javascript
key.addEventListener('transitionend', removeTransition)
```

You can listen for when a transition finishes, the length of the transition (in this case) was given by the following CSS `transition: all .07s ease;`

### Further research

- [ ] NodeList
