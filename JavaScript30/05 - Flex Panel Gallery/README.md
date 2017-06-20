## Flex Panel Gallery

What I learned on this mini-project.

*******

### toggle

You can toggle a class with the following code. This will respond to an event via an event listener. This is commonly used in click events (which is what its used for in this case).

``` javascript
this.classList.toggle('open');
```

- `this` refers to each separate panel when clicked on

### event.propertyName

When listening for `transitionend`, the event might return multiple results. Utilising `propertyName` you can respond to a transition of choice.

``` javascript
event.propertyName.includes('flex');
```

- `includes()` - Used here, since IE explorer refers to the flex property as `flex-grow`

### Tasks

- [ ] Complete [What the Flexbox](https://flexbox.io/)
