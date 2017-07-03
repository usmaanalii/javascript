## Event Capture, Propogation, Bubbling and Once

What I learned on this mini-project.

*******

### capture

When an event listener has been attached to an element, that has parents with
the same listener, triggering the event will lead to all elements registering.
By default the events will be triggered from the inside out, but
setting `capture` to true will reverse this direction to outside in.

``` javascript
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
}));
```

### once

This is a useful option for the `addEventListener` method, that will
prevent the element from triggering multiple events. It has the same
functionality as `removeEventListener`.

``` javascript
divs.forEach(div => div.addEventListener('click', logText, {
    once: true
}));
```

### Event Propagation

This is the blanket term that refers to `bubbling` and `capturing`. It
essentially means that events will cascade up and down the document
object model from the `event target` to the `window` object.

The direction of propagation can be both ways.

One nice summary of the propagation is by dividing it into three phases,
as follows. This was taken from the following [article](https://www.sitepoint.com/event-bubbling-javascript/).

- `capture phase` - From the window to the event target
- `target phase` - The event target
- `bubble phase` - From the event target back to the window
