## Adding Up Times with Reduce

What I learned on this mini-project.

*******

### data selector

If you give attributes a data element in the form `data-x` you can extract
these via attribute selection, this is shown below.

``` javascript
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```

Accessing the values for this can be done via `timeNodes.dataset.time`

### ParseFloat

Numbers are extracted from HTML elements in this project, but they are stored
as strings. Using this method you can convert them to their natural 'type'.
This will allow math functions to be applied to them.

``` javascript
const [mins, secs] = timeCode.split(':').map(parseFloat);
```

In this case, the method has been applied through `map`.
