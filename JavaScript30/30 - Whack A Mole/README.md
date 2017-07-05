## Whack A Mole

What I learned on this mini-project.

*******

### isTrusted

Here, the `click` event is important in determining the outcome of the game,
therefore we need to protect from falsely initiating them via scripts or
other modifications.

Using the `isTrusted` property allows you to ensure the event was generated
by a user action.

``` javascript
if (!event.isTrusted) return; // cheater
```

The code above, will return from the code block, if the event was not a result
of user action.

### Recursion

This technique was used to prevent the same hole from being used
twice in a row. It's important to return the value in the `randomHole`
method, so that it can be used recursively.

``` javascript
let lastHole;

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (lastHole === hole) {
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}
```

Here, the `lastHole` variable will be assigned the randomly generated hole,
if the following call generates the same hole, the `randomHole` will be
çalled again until `lastHole doesn't equal hole`.
