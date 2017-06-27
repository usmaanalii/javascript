## Sort Without Articles

What I learned on this mini-project.

*******

### replace and trim

Replacing words via regex is done via the `replace` method.

``` javascript
bandName.replace(/^[a |the |an ]/, '').trim()
```

In this case, we are targetting `a`, `the` or `an`. The spaces are used to prevent all words beginning with these words being replaced.

Trim removes whitespace from the end of the string.

- `^` Targets the start of the string
- `|` Or operator

### ES6 implicit returns

If a function's sole task is to return something, it's best to use implicit returns, which doesn't need the use of the keyword `return`.

``` javascript
(a, b) => strip(a) > strip(b) ? 1 : -1
```

This example will used a `ternary operator` to return either 1 or -1.
