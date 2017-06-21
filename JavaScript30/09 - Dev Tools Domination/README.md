## Dev Tools Domination

What I learned on this mini-project.

*******

### console

You can use `%c` to style the text you logged to the console.

``` javascript
console.log('%c This is blue by using percent c', 'color: blue');
```

You can use log warning, errors and information to the console much like regular text

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
