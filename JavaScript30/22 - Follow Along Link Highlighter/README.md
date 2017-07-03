## Follow Along Link Highlighter

What I learned on this mini-project.

*******

### getBoundingClientRect()

Used to return an elements size and position relative to the window or device
being used.

``` javascript
const linkCoords = this.getBoundingClientRect();

const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
}
```

It returns an object, which represents the CSS border-boxes associated with
the element. The values returned are read-only and can not be updated, these
include `left`, `top`, `x` and `y`.

Values represent the `border-box` in pixels and are relative to the top-left
of the viewport (this doesn't apply to `width` and `height` values).

### scrollX and scrollY

When the scrolling position changes, the values returned above will adjust to
be bound to the **current** `top-left` of the viewport. So, to make sure
the values are bound to the `top-left` of the document, you need to add
`scrollX` and `scrollY`, shown below.

``` javascript
let top = linkCoords.top + window.scrollY;
let left = linkCoords.left + window.scrollX;
```
