## Mouse Move Shadow

What I learned on this mini-project.

*******

### destructuring objects

This is a neat way of assigning multiple variables to a single
objects properties.

``` javascript
const { offsetWidth: width, offsetHeight: height } = hero;
```

It can be a little confusing at first.

The constants assigned here are

- `width` - hero.offsetWidth
- `height` hero.offsetHeight

### event offset's

When you are looking at coordinates based on an event listener, you have to
factor in the target element that is triggered.

In this case, the coordinates will change when a new target is hovered over.

Adding the elements offsets from the targetted element can counteract this.
An example is shown below

``` javascript
if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
}
```

The event in this case is attached to a `div`, and the event.target can its
child elements.
