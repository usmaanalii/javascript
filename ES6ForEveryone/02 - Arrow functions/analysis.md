# Function Improvements: Arrows and Default Arguments

## Arrow functions → →

This is a really nice upgrade, that allows you to use anonymous functions
much more concisely. We can now ditch the traditional `function`
definitions to write code that looks more compact.

``` javascript
const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
  return `${name} bos`;
});

// arrow function alternative
const fullNames2 = names.map(name => `${name} bos`);
```

The example above, demonstrates the difference in using arrow functions.

One caveat of these however, is that `errors` might be harder to debug, since the stack trace won't return a function name. This functionality can be added, by assigning your arrow functions to a variable, like so.

``` javascript
const sayMyName = (name) => { alert(`Hello ${name}`); };
```

## Arrow functions examples

When you wish to return an `object` literal from the arrow function,
you might be confused, since `{ }` are used to wrap the function statements.

To handle this, wrapping the curly braces in parenthesis, will tell
javascript, you are returning an object literal as opposed to using
a block.

``` javascript
const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

const win = winners.map((winner, i) => ( {name: winner, race, place: i + 1} ));
```

Another example of how concise the code can get with this new feature is shown below.

Here the `boolean` returned from the expression is used to filter the array.

``` javascript
const ages = [23, 54, 40, 67, 10, 16];

const old = ages.filter(age => age >= 50);
```

## Arrow functions and `this`

Traditional function definitions still have their place in Javascript. It all has to do with the differences in how `this` is treated between them and arrow functions.

Using the original `function` syntax will see a new scope created for `this`,
however for its counterpart the same `this` from the parent scope will be used.

``` javascript
box.addEventListener('click', function() {
    console.log(this); // whatever box points to
});

box.addEventListener('click', () => {
    console.log(this); // the window object (outermost parent)
})
```

## Default arguments

This neat update allows you to provide arguments to functions that you might expect to remain consistent when called (but also offer customization).

``` javascript
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip);
}
```

By giving the parameters `tax` and `tip` values right away, they can be omitted in the method call. 

An example being `calculateBill(20)` which will use the default values `0.13` and `0.15` respectively.

If you wish to modify one of the default arguments, then go ahead and add `undefined` at it's position, like so `calculateBill(20, undefined, 0.12)`.

## When **NOT** to use arrow functions

When you wish to create a new scope and use variables local to it, then traditional `function() {}` syntax should be used, if scope isn't important and `this` is going to be needed then `() => {}` is the way to go.

One common example of utilising `this` in javascript, is when you are performing DOM operations and wish to access a particular node, say via an `event listener`.

``` javascript
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
  console.log(this);
  this.classList.toggle('on');
});
```

Here, `this` will refer to the button element. If an arrow function was used, then `this` would point to the parent scope of the `addEventListener` method, in this case the `window` object.

Another example of when `function() {}` is better off, is when you are working with objects, like adding methods to the prototype.

``` javascript
class Car {
  constructor(make, colour) {
    this.make = make;
    this.colour = colour;
  }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('subaru', 'white');

Car.prototype.summarize = function() {
  return `This car is a ${this.make} in the colour ${this.colour}`;
};
```

In this example, `this` will refer to the current object's values.
