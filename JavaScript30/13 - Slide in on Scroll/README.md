## Slide in on scroll

What I learned on this mini-project.

*******

### debounce

When you want to manipulate the DOM on scroll, it's important to limit the
number of events that need a response.

``` javascript
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
            };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
        };
};
```

The debounce method will wait 20ms before registering an event, which will
reduce browser overhead

### window object

The window (and other objects) have plenty of properties associated with
scrolling activity that can be viewed and manipulated.

``` javascript
window.scrollY
window.innerHeight
sliderImage.offsetTop
```

Properties above represent different values subject to scrolling behaviour
