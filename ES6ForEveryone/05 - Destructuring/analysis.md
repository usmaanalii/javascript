# Destructuring

## Destructuring Objects

Just like arrow functions, the true benefit here, is reducing the amount of code needed to pefrorm common tasks. There are times when you'll need to create variables from array values or object property values. In the past these would need to be done sequentially leading to highly repetitive code, violating the well renowned `DRY` principle.

Now, we can use destructuring syntax `{ }` to create multiple variables in single statements.

``` javascript
const person = {
first: 'Wes',
last: 'Bos',
country: 'Canada',
city: 'Hamilton',
twitter: '@wesbos',
};

const { first, last } = person;
```

**Note**, this extends to nested properties, for example `{ middle } = person.names`.

This method of variable declaration comes with some nice features to handle different circumstances. If you find yourself having object property naming conflicts then you have the option of renaming the declared variables within the same statement.

``` javascript
const wes = {
first: 'Wes',
last: 'Bos',
links: {
  social: {
    twitter: '@wesbos',
    facebook: 'wesfb',
  },
},
location: {
  country: 'Canada',
  city: 'Hamilton',
},
};

const { twitter:tweet, facebook:fb } = wes.links.social;
```

Here, the `twitter` variable is renamed to `tweet`, likewise for `fb`.

Another feature added, is the ability to add default values and change values for variables being destructured.

If you are naming variables from an object that has a property that you wish to change, you can add `variable name = value` to do this (shown below).

``` javascript
const settings = { width: 300, color: 'black' } // height, fontsize
const { width = 100, height = 100, color = 'blue', fontsize = 5 } = settings;
```

[Back to top](#top)
**********

## Destructuring Arrays

Much like objects, arrays see a tremendous benefit from the ability to destructure its values. Renaming multiple variables is exactly the same, but uses the `[ ]` brackets instead.

``` javascript
const details = ['Wes Bos', 123, 'wesbos.com'];
const [name, id, website] = details;
```

You can also utilize this functionality to destructure `strings`. Let's say you have a long string, with values that are separated by the same value, like a `,`. It's simply the case of using `split()` to turn the string into an array and then destructure, like so...

``` javascript
const data = 'Basketball,Sports,902190,23,wes,bos,cool';
const [itemName, category, sku, inventory] = data.split(',');
```

A really neat feature that will be looked at in more depth later on in the course, is the `rest` operator. This works how it sounds (in this context). Let's say you have an array of 7 values, but you only wish to destructure 3 of them. The way that the destructuring of arrays work is that, the remaining 4 values will be discarded.

Fortunately, the `rest` operator allows you to add the remaining values to an array named after the value provided.

``` javascript
const team = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = team;
```

Here, `players = ['Sarah', 'Keegan', 'Riker]`.

[Back to top](#top)
**********

## Swapping Variables with Destructuring

A real world application has been demonstrated here, involving the swapping of two variables. Traditionally, this would need a `temporary` variable to store one variable as you swap them over.

``` javascript
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

let temp = 'Hulk Hogan';

inRing = onSide;
onSide = temp;
```

Destructuring eliminates the need for this.

``` javascript
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

[inRing, onSide] = [onSide, inRing];
```

[Back to top](#top)
**********

## Destructuring Functions - Multiple returns and named defaults

You can destructure objects returned from functions similarly to the examples shown above. One thing to note in this case, is that you have the option of choosing which properties to destructure. Order doesn't matter, since the variables are assigned based on the key's you provide.

``` javascript
function convertCurrency(amount) {
   const converted = {
     USD: amount * 0.76,
     GPB: amount * 0.53,
     AUD: amount * 1.01,
     MEX: amount * 13.30,
   };
   return converted;
 }

const { MEX, USD } = convertCurrency(100);
```

Perhaps, the coolest use of destructuring I have encountered thus far, is how they apply to function arguments.

This new functionality allows you to define functions with an object as it's parameter(s). In doing this, you can avoid the pitfalls of having to remember the order of arguments.

``` javascript
function tipCalculator({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
   return total + (tip * total) + (tax * total);
 }

const bill = tipCalculator();
```

**Note**, the example above sets the object parameter to `{}`, this is to allow you to call the function without a parameter. It essentially gives the function call an empty object to destructure its default parameters into.

[Back to top](#top)
**********
