## CSS Variables

What I learned on this mini-project.

*******

### variables

Like SASS, you can create variables for use throughout your stylsheet.

``` CSS
/* Definition */
--base: #ffc600;

/* Use */
.hl {
    color: var(--base);
}
```

The prefix `--` is necessary.

**Note** - Remember, that this can be overruled by capitalising on the cascading property of CSS.

### dataset

Can be used to access data attribute values given to HTML elements. These data elements must be prefixed with `data-`. An example is the following...

``` html
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
```

Accessing this value is done with the following code...

``` javascript
const suffix = this.dataset.sizing;
```

### Tasks

- [ ] Figure out why the range slider doesn't show when using dev tools
