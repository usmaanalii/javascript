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
