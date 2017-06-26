## LocalStorage

What I learned on this mini-project.

*******

### preventDefault

This is useful if you want to stop a form submitting, which by default, will
refresh the page (or direct you to a specified page).

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

When attaching event listeners to elements, you may want to access data
from them. In the case of form elements, with `inputs` and `labels` etc, you
might not be able to distinguish which was clicked.

Using event.target, you can narrow down to which element is needed.

``` javascript
if (!event.target.matches('input')) return; // skip
```

This example, will return elements clicked apart from `input's`'

### event delegation

When you wish to attach an event listener to an element that doesn't exist on
the page at the time of loading, event delegation is needed.

It works by attaching the event listener to a parent element (that does exist),
which then passes on the instruction (delegates) to the child element being
targetted.

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

Browsers, now have the ability to store local data for individual webpages and
browsers. The data is stored as a string that can be parsed into javascript
objects.

You can set and get items from `localStorage`.

``` javascript
localStorage.setItem('items', JSON.stringify(items));
```

Using `JSON.stringify()` here is necessary to convert it to a string
representation of the object's key value pairs.

An example of utilising the data and adding it to a variable for use between
browser reloads, is shown below. This enables your pages to have continuity
based on existing user behaviour.

``` javascript
const items = JSON.parse(localStorage.getItem('items'));
```

Here, the `'items'` refer to the string interpretation of the object,
whilst `JSON.parse` converts the string back to a javascript object, ready for
use.
