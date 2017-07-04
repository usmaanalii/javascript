## Click and Drag

What I learned on this mini-project.

*******

### Flag variable

These can be used to control the flow of a method of piece of functionality.
They are mainly used to hold a value such as `true` until some condition
changes and it is changed.

``` javascript
let isDown = false;

isDown = true;
```

In this example, the isDown variable tracks the state of the mouse. When the
`mousedown` event is triggered the `isDown` variable is changed, which is used
to add further functionality.

### pageX and offsetLeft

In this project, the `mousedown` event is used to initiate the click and drag
functionality. For this to work effectively, an anchor point was used,
representing the initial click point, the `pageX` property of the event
captures this value.

``` javascript
event.pageX
```

If a margin or padding is added, then the `pageX` value will be off,
to compensate for this, you can subtract this from the parent element's
offset to the window. The code to do this, is shown below

``` javascript
startX = event.pageX - slider.offsetLeft;
```
