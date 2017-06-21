## Key Sequence Detection

What I learned on this mini-project.

*******

### event.key

When listening for a keyup event, you can access the name of the key being pressed.

``` javascript
event.key;
```

This will return, for example 'Shift' if this key was pressed

### splicing an array for the last pressed 'word'

If you are trying to match user input, you may need the last pressed 'x' digits, a cool way of doing this is to add their input to an array and apply a `splice` followed by `join`.

``` javascript
pressed.push(event.key)
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

The splice in this case

- **Starts** at the end of the array
- **Ends** when the length of the `secretCode` has been met
