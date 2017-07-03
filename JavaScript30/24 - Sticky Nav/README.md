## Sticky Nav

What I learned on this mini-project.

*******

### position: fixed

Tha main purpose of this project was to learn about the effects of changing
an elements position to `fixed`.

When applying this property, the element is essentially taken out of the
`DOM` vacating it's space. This causes a reshuffle for the other elements,
which can cause a judder.

``` css
.fixed-nav nav {
    position: fixed;
    box-shadow: 0 5px rgba(0, 0, 0, .1);
}
```

One workaround to this, is to fill in the space vacated, through `padding`.
This can be done multiple ways, but it makes sense to make this value
programmatic, so that it adapts to further page modifications.

``` javascript
document.body.style.paddingTop = `${nav.offsetHeight}px`;
```
