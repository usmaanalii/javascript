## Video Speed Controller

What I learned on this mini-project.

*******

### offsetHeight

This property represents the height of an element, including vertical padding
and borders. It is measured in pixels and is returned as an integer.

``` javascript
const percent = y / this.offsetHeight;
```

Here, this was used to in the percentage calculation used to fill
the speed-bar.

### Normalize value

It makes sense for the speed-bar to have appropriate minimum and
maximum values, because of this it made sense to normalize the percentage
scrolled to these values.

``` javascript
const playBackRate = percent * (max - min) + min;
```

In this case, `minimum = 0.4` and `maximum = 4`. So, the percentage scrolled
would fall between the two. For example `10%` is equal to
a playBackRate of `0.43`.
