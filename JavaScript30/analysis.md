# Javascript 30 Analysis

This is a summary of the key information I took away from each project.

## [Contents](#contents)

- [1. Javascript Drum Kit](#1-javascript-drum-kit)
    - [addEventListener](#addeventlistener)
    - [querySelector & querySelectorAll](#queryselector--queryselectorall)
    - [classList](#classlist)
    - [transitionend](#transitionend)
- [2. JS and CSS Clock](#2-js-and-css-clock)
    - [Date object](#date-object)
    - [setInterval](#setinterval)
    - [style](#style)
    - [transform-origin](#transform-origin)
    - [transition-timing-function](#transition-timing-function)
- [3. CSS Variables](#3-css-variables)
    - [variables](#variables)
    - [dataset](#dataset)
- [4. Array Cardio Day 1](#4-array-cardio-day-1)
    - [filter](#filter)
    - [Array.from](#arrayfrom)
    - [reduce](#reduce)
    - [reduce \(part 2\)](#reduce-part-2)
- [5. Flex Panel Gallery](#5-flex-panel-gallery)
    - [toggle](#toggle)
    - [event.propertyName](#eventpropertyname)
- [6. Type Ahead](#6-type-ahead)
    - [fetch](#fetch)
    - [RegExp](#regexp)
- [7. Array Cardio Day 2](#7-array-cardio-day-2)
    - [Array.prototype.some\(\)](#arrayprototypesome)
    - [Array.prototype.every\(\)](#arrayprototypeevery)
    - [Array.prototype.find\(\)](#arrayprototypefind)
    - [Array.prototype.some\(\)](#arrayprototypesome-1)
- [8. Fun with HTML5 Canvas](#8-fun-with-html5-canvas)
    - [getContext](#getcontext)
    - [Destructuring assignment](#destructuring-assignment)
- [9. Dev Tools Domination](#9-dev-tools-domination)
    - [console](#console)
- [10. Hold Shift and Check Checkboxes](#10-hold-shift-and-check-checkboxes)
    - [let](#let)
    - [shiftKey](#shiftkey)
    - [checked](#checked)
- [11. Custom Video Player](#11-custom-video-player)
    - [play and pause](#play-and-pause)
    - [currentTime](#currenttime)
    - [offsetWidth](#offsetwidth)
    - [timeupdate](#timeupdate)
- [12. Key Sequence Detection](#12-key-sequence-detection)
    - [event.key](#eventkey)
    - [splicing an array for the last pressed 'word'](#splicing-an-array-for-the-last-pressed-word)
- [13. Slide in on scroll](#13-slide-in-on-scroll)
    - [debounce](#debounce)
    - [window object](#window-object)
- [14. Javascript Reference vs Copying](#14-javascript-reference-vs-copying)
    - [strings, numbers and booleans](#strings-numbers-and-booleans)
    - [array](#array)
    - [objects](#objects)
- [15. LocalStorage](#15-localstorage)
    - [preventDefault](#preventdefault)
    - [template literal ternary operator](#template-literal-ternary-operator)
    - [event.target](#eventtarget)
    - [event delegation](#event-delegation)
    - [localStorage](#localstorage)
- [16. Mouse Move Shadow](#16-mouse-move-shadow)
    - [destructuring objects](#destructuring-objects)
    - [event offset's](#event-offsets)
- [17. Sort Without Articles](#17-sort-without-articles)
    - [replace and trim](#replace-and-trim)
    - [ES6 implicit returns](#es6-implicit-returns)
- [18. Adding Up Times with Reduce](#18-adding-up-times-with-reduce)
    - [data selector](#data-selector)
    - [ParseFloat](#parsefloat)
- [19. Webcam Fun](#19-webcam-fun)
    - [video](#video)
    - [pixels](#pixels)
    - [insertBefore](#insertbefore)
- [20. Speech Detection](#20-speech-detection)
    - [SpeechRecognition\(\)](#speechrecognition)
    - [end](#end)
- [21. Geolocation](#21-geolocation)
    - [geolocation](#geolocation)
    - [watchPosition](#watchposition)
    - [coords](#coords)
- [22. Follow Along Link Highlighter](#22-follow-along-link-highlighter)
    - [getBoundingClientRect\(\)](#getboundingclientrect)
    - [scrollX and scrollY](#scrollx-and-scrolly)
- [23. Speech Synthesis](#23-speech-synthesis)
    - [speechSynthesisUtterance](#speechsynthesisutterance)
    - [SpeechSynthesis](#speechsynthesis)
    - [Anonymous function](#anonymous-function)
- [24. Sticky Nav](#24-sticky-nav)
    - [position: fixed](#position-fixed)
- [25. Event Capture, Propagation, Bubbling and Once](#25-event-capture-propagation-bubbling-and-once)
    - [capture](#capture)
    - [once](#once)
    - [Event Propagation](#event-propagation)
- [26. Stripe Follow Along Nav](#26-stripe-follow-along-nav)
    - [CSS > selector](#css--selector)
    - [Using multiple classes for progressive effects](#using-multiple-classes-for-progressive-effects)
    - [getBoundingClientRect modification](#getboundingclientrect-modification)
- [27. Click and Drag](#27-click-and-drag)
    - [Flag variable](#flag-variable)
    - [pageX and offsetLeft](#pagex-and-offsetleft)
- [28. Video Speed Controller](#28-video-speed-controller)
    - [offsetHeight](#offsetheight)
    - [Normalize value](#normalize-value)
- [29. Countdown Timer](#29-countdown-timer)
    - [setInterval\(\) and clearInterval\(\)](#setinterval-and-clearinterval)
    - [Working with timestamps](#working-with-timestamps)
    - [Form element selectors](#form-element-selectors)
- [30. Whack A Mole](#30-whack-a-mole)
    - [isTrusted](#istrusted)
    - [Recursion](#recursion)

[Back to top](#contents)
*************

## 1. Javascript Drum Kit

What I learned on this mini-project.

### addEventListener

``` javascript
window.addEventListener('keydown', playSound);
```

This is used to attach an event handler to the window object. An event in this context is when "something happens to the window object".

- `keydown` is the event name
- `playSound` is the function that runs when the event happens

### querySelector & querySelectorAll

``` javascript
const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

const keys = document.querySelectorAll('.key');
```

This will return the HTML element you trying to select (or all of them as a NodeList), an example of what will be stored in `key` is shown below.

``` html
<div data-key="65" class="key">
    <kbd>A</kbd>
    <span class="sound">clap</span>
</div>
```

### classList

``` javascript
key.classList.add('playing');
key.classList.remove('playing');
key.classList.append('playing');
```

This quite simply adds classes like you would in jQuery with `key.addClass`.

### transitionend

``` javascript
key.addEventListener('transitionend', removeTransition)
```

You can listen for when a transition finishes, the length of the transition (in this case) was given in the following CSS `transition: all .07s ease;`

### Further research

- [x] NodeList

[Back to top](#contents)
*************

## 2. JS and CSS Clock

What I learned on this mini-project.

### Date object

You can extract the `second`, `minute` and `hour` of the date object by accessing it's object methods.

``` javascript
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();
```

### setInterval

This can be used to perform a function at a given interval, here, 1000 is equal to 1 second.

``` javascript
setInterval(setDate, 1000);
```

- `setData` - The method to run
- `1000` - The interval to wait until running the method (again)

### style

You can use dot notation to add styles to an element extracted from the DOM.

``` javascript
const secondHand = document.querySelector('.second-hand');

secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
```

Here, the transform attribute (on the HTML element with the class `second-hand`) has been given a dynamic value.

### transform-origin

This CSS attribute can be used to determine where a given transform 'pivots' from.

``` CSS
transform-origin: 100%;
```

- `100%` - Moves the pivot from its default position (which is the center of the element i.e `50%`) to the end of the `x-axis`

### transition-timing-function

Useful for adding a custom transition effect.

``` CSS
transition-timing-function: cubic-bezier(0, 2.11, 0.58, 1);
```

You can use **chrome dev tools** to create your `cubic-bezier`. More info on this [here](https://plus.google.com/+UmarHansa/posts/KJbumJ6wkrn)

### Tasks

- [ ] - Fix the transition judder at 0/60 seconds

[Back to top](#contents)
*************

## 3. CSS Variables

What I learned on this mini-project.

### variables

Like with SASS, you can create variables for use throughout your stylesheet.

``` CSS
/* Definition */
--base: #ffc600;

/* Use */
.hl {
    color: var(--base);
}
```

The prefix `--` is necessary.

**Note** - Remember, that this can be overruled by capitalizing on the cascading property of CSS.

### dataset

Can be used to access data attribute values given to HTML elements. These data elements must be prefixed with `data-`. An example is the following...

``` html
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
```

You can access this value with the following code...

``` javascript
const suffix = this.dataset.sizing;
```

### Tasks

- [ ] Figure out why the range slider doesn't show when using dev tools

[Back to top](#contents)
*************

## 4. Array Cardio Day 1

What I learned on this mini-project.

### filter

This can be used to assess each item of an array against a condition, and create a new one for those that pass.

``` javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

Here, we used a more concise syntax. If the resulting boolean expression returns `true` it will 'pass the condition' and be returned in the filtered array.

- `inventor` takes the role of the current iterand, much like `i` in a traditional `for (var i = 0; i++; i < arr.length)` loop

### Array.from

This is useful when you wish to apply array methods to a node list extracted from a website (in this case wikipedia).

``` javascript
const links = Array.from(category.querySelectorAll('a'));
```

Now, you are able to apply, `map`, `reduce`, `sort` etc... to links.

### reduce

This method takes an array and attempts to whittle it down to single value (or values shown in the next exanple).

``` javascript
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)
```

It's best to think of the parameters `total` and `inventor` as an `accumulator` and `iterand`. The `0` provides a starting point for the total, since if it were omitted, it would use `undefined` to add the first iterand to.

### reduce (part 2)

Perhaps a more complex use case for reduce is when trying to reduce multiple elements in an array.

The goal was to reduce each element to the number of occurrences in the array.

``` javascript
const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item] ++;

    return obj;
}, {});
```

The key in this case, was to use an `empty object` as the initial value for the object, and call `obj[key]` for each iteration.

[Back to top](#contents)
*************

## 5. Flex Panel Gallery

What I learned on this mini-project.

### toggle

You can toggle a class with the following code. This will respond to an event via an event listener. This is commonly used in click events (which is what its used for in this case).

``` javascript
this.classList.toggle('open');
```

- `this` refers to each separate panel when clicked on

### event.propertyName

When listening for `transitionend`, the event might return multiple elements that were affected. Utilizing `propertyName` you can respond to a element with more specificity.

``` javascript
event.propertyName.includes('flex');
```

- `includes()` - Used here, since IE explorer refers to the flex property as `flex-grow`

### Tasks

- [ ] Complete [What the Flexbox](https://flexbox.io/)

[Back to top](#contents)
*************

## 6. Type Ahead

What I learned on this mini-project.

### fetch

In this case, fetch is used to retrieve data from a url which results in a JSON data source.

``` javascript
fetch(endpoint).then(blob => blob.json());
```

This will return a promise, that can be resolved. The `json()` method can be used to retrieve the data.

The following code will add the data to an array

``` javascript
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));
```

**Note** Use of the `... spread` operator to push each data object into the array instead of it entirely (which would push the entire data source at `index 0`)

### RegExp

In order to use a `variable` as your string to match, you need to create a `RegExp` object.

``` javascript
const regex = new RegExp(wordToMatch, 'gi');
```

This can then be used in `match()` methods, for example

``` javascript
return place.city.match(regex);
```

[Back to top](#contents)
*************

## 7. Array Cardio Day 2

What I learned on this mini-project.

### Array.prototype.some()

Checks against the array, and returns `true` if at least one item meets the condition.

``` javascript
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
```

- `new Date()).getFullYear()` gets the current year

### Array.prototype.every()

Checks against the array, and returns `true` if all items meets the condition.

``` javascript
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);
```

- `new Date()).getFullYear()` gets the current year

### Array.prototype.find()

Checks against the array, and returns the result of the item, that meets the criteria (in this case it is an object)

``` javascript
const index = comments.find(comment => comment => comment.id === 823423);
```

### Array.prototype.some()

Checks against the array, and returns the `index` of the item that meets the condition.

``` javascript
const index = comments.findIndex(comment => comment.id === 823423);
```

[Back to top](#contents)
*************

## 8. Fun with HTML5 Canvas

What I learned on this mini-project.

### getContext

The canvas has properties that can be modified to alter the line style.

``` javascript
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
```

### Destructuring assignment

ES6 allows you to easily name multiple variables, demonstrated by the the following code

``` javascript
[lastX, lastY] = [event.offsetX, event.offsetY];
```

[Back to top](#contents)
*************

## 9. Dev Tools Domination

What I learned on this mini-project.

### console

You can use `%c` to style the text you logged to the console.

``` javascript
console.log('%c This is blue by using percent c', 'color: blue');
```

You can also, log warning, errors and information to the console much like you would with regular text.

``` javascript
// warning!
console.warn('Warning');

// Error :|
console.error('ERROR!');

// Info
console.info('Crocodiles eat 3-4 people per year!');
```

If you wish to see an elements properties and methods in a cleaner form, the following code will make this easier

``` javascript
console.dir(p);
```

You can use use assertions in the console, the following example demonstrates checking to see if an element has a certain class.

``` javascript
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
```

One useful feature for neatening the output on the console is `groupCollapsed` Using this along with `groupEnd` ensures that the data for each list item will be concise and separate.

``` javascript
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});
```

[Back to top](#contents)
*************

## 10. Hold Shift and Check Checkboxes

What I learned on this mini-project.
### let

Using let for variable assignments is useful when you expect the the variable to change.

``` javascript
let lastChecked;
```

This is different to `const` which is for variables you wish to remain constant throughout the script.

### shiftKey

You can use the shiftKey property of an event to check if its active

``` javascript
event.shiftKey;
```

In this case, this is used for a `click` event

### checked

To check whether a checkbox has been checked or not, you can assess its `checked` property (I heard it too...)

``` javascript
checkbox.checked;
```

[Back to top](#contents)
*************

## 11. Custom Video Player

What I learned on this mini-project.

You can access the `video` element and manipulate its behavior via it's properties and methods.

### play and pause

To assess whether or not the video is paused, the following property can be assessed

``` javascript
// returns a boolean
video.paused;
```

To play and pause the video you can call `play` and `pause` methods on the video object, like so

``` javascript
const method = video.paused ? 'play' : 'pause';
video[method]();
```

### currentTime

To move along a video you can change its `currentTime` property

``` javascript
video.currentTime += 10;
```

### offsetWidth

In this example, we had to assess how far along the cursor was for a horizontal range element, `offsetWidth` gives the length of the element, whereas `offsetX` gives the amount the cursor is along the x axis (of the element). The code get the time of the video relative to the scrubbed amount is shown below.

``` javascript
const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
```

### timeupdate

This is a useful event that is fired when the video is playing (as in the time that the video has been playing is updated), in this case it was used to fill the progress bar proportionately.

``` javascript
video.addEventListener('timeupdate', handleProgress);
```

### Tasks

- [ ] Complete the fullscreen functionality

[Back to top](#contents)
*************

## 12. Key Sequence Detection

What I learned on this mini-project.

### event.key

When listening for a keyup event, you can access the name of the key being pressed.

``` javascript
event.key;
```

This will return, for example `Shift` if the shift key was pressed

### splicing an array for the last pressed 'word'

If you are trying to match user input, you may need the last pressed `x` digits, a cool way of doing this is to add their input to an array and apply a `splice` followed by `join`.

``` javascript
let pressed = [];
pressed.push(event.key);
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

The splice in this case

- **Starts** at the end of the array
- **Ends** when the length of the `secretCode` has been met

[Back to top](#contents)
*************

## 13. Slide in on scroll

What I learned on this mini-project.

### debounce

When you want to manipulate the DOM on scroll, it's important to limit the number of events that elicit a response.

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

The debounce method will wait 20ms before registering an event, which will reduce browser overhead

### window object

The window (and other objects) have plenty of properties associated with
scrolling activity that can be viewed and manipulated.

``` javascript
window.scrollY
window.innerHeight
sliderImage.offsetTop
```

Properties above represent different values updated according to scrolling behavior.

[Back to top](#contents)
*************

## 14. Javascript Reference vs Copying

What I learned on this mini-project.

### strings, numbers and booleans

Javascript will make copies of these types, so changing the values like below
is okay

``` javascript
let age = 100;
let age2 = age;

age = 200;
```

In this case, the `age2` variable will keep its original value of `100`

### array

When dealing with arrays, you need to be aware of the references.

``` javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
```

Here, modifying the `team` array's values will modify the `players` array, for example

``` javascript
team[3] = 'Lux';

console.log(players[3]); // 'Lux'
```

To leave the original array intact, you must make copies of it. There are multiple ways of doing this, some are shown below

``` javascript
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
```

### objects

The same principle of referencing (from arrays) apply here.
To copy an object to another variable, the following code would work

``` javascript
const person = {
    name: 'Wes Bos',
    age: 80
};

const cap2 = Object.assign({}, person, { age: 99 });
```

The `Object.assign()` method takes in a

- `target` - In this case, this is a blank object `{}`
- `sources` - Object(s) to add

**Note**

- `{age: 99}` - This will modify the existing age variable in person

[Back to top](#contents)
*************

## 15. LocalStorage

What I learned on this mini-project.

### preventDefault

This is useful if you want to stop a form submitting, which by default, will redirect you to the form handling page.

``` javascript
event.preventDefault();
```

### template literal ternary operator

A really cool feature implemented in this project, was the use of a ternary
operator to dictate whether or not an attribute was given to some HTML.

``` javascript
`
<input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? 'checked' : ''} />
`
```

Here, the ternary operator would either add `checked` or nothing, dictated by
the boolean value returned from `plate.done`

### event.target

When attaching event listeners to elements, you might want to access data from them.

In the case of form elements, with `inputs` and `labels` etc, you
might not be able to distinguish which was clicked.

Using event.target, you can narrow down to which element is needed.

``` javascript
if (!event.target.matches('input')) return; // skip
```

This example, will return all elements clicked other than `input's`'

### event delegation

When you wish to attach an event listener to an element that doesn't exist on the page, at the time of loading, `event delegation` is needed.

It works by attaching the event listener to a parent element (that does exist), which then passes on the instruction (delegates) to the child element being targeted.

``` javascript
itemsList.addEventListener('click', toggleDone);

function toggleDone(event) {
    if (!event.target.matches('input')) return; // skip
    const element = event.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));

    populateList(items, itemsList);
}
```
`itemsList` is the parent element, that delegates the instruction to the
`event.target` elements.

### localStorage

Browsers, now have the ability to store local data for individual webpages and browsers. The data is stored as a string that can be parsed into javascript objects.

You can set and get items from `localStorage`.

``` javascript
localStorage.setItem('items', JSON.stringify(items));
```

Using `JSON.stringify()` here is necessary to convert it to a string
representation of the object's key value pairs.

An example of utilizing the data and adding it to a variable for use between browser reloads, is shown below.

This enables your pages to have continuity based on existing user behavior.

``` javascript
const items = JSON.parse(localStorage.getItem('items'));
```

Here, the `'items'` refer to the string interpretation of the object,
whilst `JSON.parse` converts the string back to a javascript object, ready for
use.

[Back to top](#contents)
*************

## 16. Mouse Move Shadow

What I learned on this mini-project.
### destructuring objects

This is a neat way of assigning multiple `key:value` pairs to a single
object.

``` javascript
const { offsetWidth: width, offsetHeight: height } = hero;
```

It can be a little confusing at first. In this case

``` javascript
hero.offsetWidth; // width
hero.offsetHeight; // height
```

### event offset's

When you're looking at coordinates based on an event listener, you have to consider the position of the element being triggered upon.

In this case, the coordinates will change when a new target is hovered over.

Adding the elements offsets from the targeted element can counteract this.
An example is shown below

``` javascript
if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
}
```

The event in this case is attached to a `div`, and the event.target is a child element.

[Back to top](#contents)
*************

## 17. Sort Without Articles

What I learned on this mini-project.

### replace and trim

Replacing words through regular expressions is done via the `replace` method.

``` javascript
bandName.replace(/^[a |the |an ]/, '').trim()
```

In this case, we are targeting `a`, `the` or `an`. The spaces are used to prevent all words beginning with these words being replaced.

Trim removes whitespace from the end of the string.

- `^` Targets the start of the string
- `|` Or operator

### ES6 implicit returns

If a function's sole task is to return something, it's best to use implicit returns, which omits the use of the keyword `return`.

``` javascript
(a, b) => strip(a) > strip(b) ? 1 : -1
```

This example uses a `ternary operator` to return either 1 or -1.

[Back to top](#contents)
*************

## 18. Adding Up Times with Reduce

What I learned on this mini-project.

### data selector

If you give elements a data element, in the form `data-x` you can extract these through attribute selection, this is shown below.

``` javascript
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
```

Accessing the values for this can be done via `timeNodes.dataset.time`

### ParseFloat

Numbers are extracted from HTML elements in this project, but they are stored as strings. Using this method you can convert them to the numeric `type`. This is useful for performing mathematical operations on them.

``` javascript
const [mins, secs] = timeCode.split(':').map(parseFloat);
```

In this case, the method has been applied through `map`.

[Back to top](#contents)
*************

## 19. Webcam Fun

What I learned on this mini-project.

### video

The source of your video is in the form of a URL, that can be generated by the
`navigator` object. This is done by accessing it's property `mediaDevices` which in turn calls a property `getUserMedia`.

The result of this is a `promise` that when successful, is used to generate
the URL.

``` javascript
video.src = window.URL.createObjectURL(localMediaStream);
```

### pixels

Browsers interpret images as a series of pixels, where each pixels' `rgba` values that are stored in a large two dimensional array of millions of values.

In these arrays, every pixel has four entries, one for each `rgba` value. So for example

- `[0, 1, 2, 3]` Would mean a red value of 0, green value of 1 etc...

In this case, the pixels are drawn onto the canvas via `drawImage` which takes in the following parameters

- `video stream`
- `starting x coordinate`
- `starting y coordinate`
- `width`
- `height`

### insertBefore

This method provides the same functionality as `prepend` from jQuery.

``` javascript
strip.insertBefore(link, strip.firstChild);
```

Here, `strip` represents a div element.

[Back to top](#contents)
*************

## 20. Speech Detection

What I learned on this mini-project.

### SpeechRecognition()

This is a window object that lets you use your microphone to implement
speech recognition functionality

``` javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
```

In chrome, you need to prepend SpeechRecognition with `webkit`.

### end

This is the event that can be listened for when the microphone receives input.

``` javascript
recognition.addEventListener('end', recognition.start);
```

The result of this, is a `SpeechRecognitionResultList` object which has
many properties, one of which is the `transcript` containing the words that
were interpreted.

Another property from this object, that was used here is `isFinal`, which attempts to detect the ending of the speech.

[Back to top](#contents)
*************

## 21. Geolocation

What I learned on this mini-project.

### geolocation

This is a property of the window object, that contains data about the users location. You must grant access for it to work.

``` javascript
navigator.geolocation.watchPosition(data => {
    console.log(data);

    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }, (error) => {
    console.error(error);
    alert('ENABLE GEOLOCATION!!!');
});
```

The geolocation object is only introduced very briefly.

### watchPosition

This method, allows you to update the users position at regular intervals,
instead of getting a snapshot of where they are.

The data returned then needs to be manipulated via a `promise`, that handles
success and failure outcomes.

### coords

Most of the data that you will need is contained in this object.
Examples of this include the latitude, longitude and heading (representing
degrees from north).

[Back to top](#contents)
*************

## 22. Follow Along Link Highlighter

What I learned on this mini-project.

### getBoundingClientRect()

Used to return an elements size and position relative to the window.

``` javascript
const linkCoords = this.getBoundingClientRect();

const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
}
```

It returns an object, which represents the CSS borders associated with
the element. The values returned are read-only and can not be updated these include `left`, `top`, `x` and `y`.

Values represent the `border-box` in pixels and are relative to the top-left
of the viewport (this doesn't apply to `width` and `height` values).

### scrollX and scrollY

When the scrolling position changes, the values returned above will adjust to
be bound to the current `top-left` of the **viewport**. So, to make sure
the values are bound to the `top-left` of the **document**, you need to add `scrollX` and `scrollY`, shown below.

``` javascript
let top = linkCoords.top + window.scrollY;
let left = linkCoords.left + window.scrollX;
```

[Back to top](#contents)
*************

## 23. Speech Synthesis

What I learned on this mini-project.

### speechSynthesisUtterance

An interface for the Web Speech API. This contains the content that the speech service will read, along with options, such as language and pitch.

``` javascript
const msg = new SpeechSynthesisUtterance();

// Example properties used
msg.lang;
msg.pitch;
msg.rate;
msg.text;
```

- `voiceschanged` - This event listener can be used to attach an event to add voices to use.
- `getVoices()` - Will extract the voices on the device being used as an array

### SpeechSynthesis

This is the controller interface for the speech service, which can be used to get information about the voices available. It can also be used to start and pause the speech.

``` javascript
speechSynthesis.paused;
speechSynthesis.pending;
speechSynthesis.speaking;

speechSynthesis.cancel();
speechSynthesis.pause();
speechSynthesis.speak();
```

Above, are example properties and methods that can be used to alter the state of the speech
device.

### Anonymous function

At times you might want to provide a parameter to a function for use in an event listener. Unfortunately, doing this by a traditional function call will result in it being run on page load.

Using an anonymous function, you can avoid this problem

``` javascript
stopButton.addEventListener('click', () => toggle(false));
```

One caveat to this is the creation of a new function, doing this too much, can unnecessary overhead to the code affecting its speed and efficiency.

[Back to top](#contents)
*************

## 24. Sticky Nav

What I learned on this mini-project.

### position: fixed

Tha main purpose of this project was to learn about the effects of changing an elements position to `fixed`.

When applying this property, the element is essentially taken out of the `DOM` vacating it's space. This causes a reshuffle for the other elements, which can cause a judder.

``` css
.fixed-nav nav {
    position: fixed;
    box-shadow: 0 5px rgba(0, 0, 0, .1);
}
```

One workaround to this, is to fill in the space vacated, through `padding`.
This can be done multiple ways, but it makes sense to make this value
dynamic, so that it adapts to further page modifications.

``` javascript
document.body.style.paddingTop = `${nav.offsetHeight}px`;
```

[Back to top](#contents)
*************

## 25. Event Capture, Propagation, Bubbling and Once

What I learned on this mini-project.

### capture

When an event listener has been attached to an element, that has parents with the same listener, triggering the event will lead to all elements registering.

By default the events will be triggered from the inside out, but
setting `capture` to `true` will reverse this direction to outside in.

``` javascript
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
}));
```

### once

This is a useful option for the `addEventListener` method, that will
prevent the element from triggering multiple events. It has the same
functionality as `removeEventListener`.

``` javascript
divs.forEach(div => div.addEventListener('click', logText, {
    once: true
}));
```

### Event Propagation

This is the blanket term that refers to `bubbling` and `capturing`. It
essentially means that events will cascade up and down the document
object model from the event `target` to the `window` object.

The direction of propagation can be both ways.

A nice summary of the concept is explained by dividing it into three phases.

This was taken from the following [article](https://www.sitepoint.com/event-bubbling-javascript/).

- `capture phase` - From the window to the event target
- `target phase` - The event target
- `bubble phase` - From the event target back to the window

[Back to top](#contents)
*************

## 26. Stripe Follow Along Nav

What I learned on this mini-project.

### CSS `>` selector

This is used when you want to match **direct** children elements.

``` javascript
const triggers = document.querySelectorAll('.cool > li');
```

So, in this case the first `li` tag, of elements with a class of `cool`
will be selected.

### Using multiple classes for progressive effects

In this project, an element needs to be displayed and faded in. It's initially given the `display: none`, which means transitions can't be applied directly.

By using multiple classes and adding them sequentially, you can first
add the element to the page through a class with the property `display: block`, then add a second class with the desired transformation properties.

This is shown, in the following code.

``` javascript
this.classList.add('trigger-enter');
setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
```

**Note**, a delay of 150ms has been added before adding the second class, this is to maintain order.

### getBoundingClientRect modification

This object, will by default, give values based on the current viewport's `top-left` point. On occasion, you might want the element you are targeting to be based on another element.

To do this, you must get that element's values via `getBoundingClientRect` and
subtract these from the element you are targeting.

An example is shown below, where the `dropdown` is positioned based on the
'nav'.

``` javascript
const navCoords = nav.getBoundingClientRect();
const dropdownCoords = dropdown.getBoundingClientRect();

const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
};
```

[Back to top](#contents)
*************

## 27. Click and Drag

What I learned on this mini-project.

### Flag variable

These can be used to control the flow of a method or other piece of functionality.
They are mainly used to hold a value such as `true` until some condition changes and it is changed.

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
to compensate for this adjustment, you can subtract the pixels changed from the parent element's offset to the window. The code to do this, is shown below

``` javascript
startX = event.pageX - slider.offsetLeft;
```

[Back to top](#contents)
*************

## 28. Video Speed Controller

What I learned on this mini-project.

### offsetHeight

This property represents the height of an element, including vertical padding and borders. It is measured in `pixels` and is returned as an integer.

``` javascript
const percent = y / this.offsetHeight;
```

Here, this was used in the percentage calculation used to fill
the speed-bar.

### Normalize value

It makes sense for the speed-bar to have appropriate minimum and
maximum values, so normalization was used to map the percentage to these `minimum` and `maximum` values.

``` javascript
const playBackRate = (percent / (max - min)) + min;
```

In this case, `minimum = 0.4` and `maximum = 4`. So, the percentage scrolled
would fall between the two. For example `10%` is approximately equal to
a playBackRate of `0.43`.

[Back to top](#contents)
*************

## 29. Countdown Timer

What I learned on this mini-project.

### setInterval() and clearInterval()

The `setInterval` method has been used in previous projects, but in this
particular case it's used in conjunction with `clearInterval`.

When you wish for a function or code snippet to run every so often,
`setInterval` can be used.

``` javascript
countdown = setInterval(() => {
    // method
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    }, 1000); // time delay
```

In this case, an anonymous function which defines a constant is run every
`1000 milliseconds`.

In order to clear the `countdown` variable i.e stop the method running
via `setInterval` you need to clear it. If you don't do this, and
try to run this method whilst it's already running (through another
function call), they will both run, which can cause erratic behavior.

``` javascript
clearInterval(countdown);
```

Here, the method to be ran under a time interval is assigned to `countdown`, therefore clearing the variable does the job of cancelling the method calls.

### Working with timestamps

If you want the current time, then `Date.now()` can be used, however this
will return the number of milliseconds elapsed since `01/01/1970`.

It's easy to turn this into a date object via `new Date(milliseconds)`,
where the value extracted from `Date.now()` is used as a parameter.

Using this object, various methods can be used to extract different
pieces of data such as the day, month and year.

``` javascript
const end = new Date(timestamp);
const hour = end.getHours();
const minutes = end.getMinutes();
```

### Form element selectors

When you want to attach an event to a form, you can utilise `this` to
extract it's input values.

``` javascript
document.customForm.addEventListener('submit', function (event) {
    const mins = this.minutes.value;
});
```

Here, an event listener is attached to the form via its `name` attribute `(customForm)`,
and its inputs are extracted by accessing properties off `(this)`.

[Back to top](#contents)
*************

## 30. Whack A Mole

What I learned on this mini-project.

### isTrusted

Here, the `click` event is important in determining the outcome of the game, therefore we need to protect from falsely initiating them via scripts or any other modifications.

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

## Final Remark

This course does a really good job, of providing real world examples of javascript. This will definitely help you to retain information better than simply reading.

I highly recommend the course, so take it, if you have the time!
