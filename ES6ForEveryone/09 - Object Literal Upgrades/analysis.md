# Object Literal Upgrades

## Object Literal Upgrades

When adding already defined variables to objects whilst maintaining the same variable name, you don't need to repeat yourself anymore. It's common to see this pattern in existing Javascript code.

``` javascript
const first = 'Snickers';

const dog = {
    first: first
};
```

This need for repetitive code has been handled, and simply needs the variable name to be declared within the object.

``` javascript
const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';

const dog = {
  first,
  last,
  age,
  breed,
  pals: ['Hugo', 'Sunny'],
};
```

The ability to compute key names is probably the most elaborate upgrade to Objects in ES6. The next example demonstrates adding a new key value pair that is an extension of an existing key value pair. Note the use of template strings in the computation of the key name.

``` javascript
const key = 'inkColor';
const value = '#ffc600';

const tShirt = {
   [key]: value,
   [`${key}Opposite`]: invertColor(value),
 };
```

This will result in a second property being created with the name `inkColorOpposite`.

You can also use functions in your property name declarations, this is shown in the next example, although it is a little confusing. What's being done is, the values from the specified arrays are being `shifted` off and added as **both** keys and values.

``` javascript
const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
 [keys.shift()]: values.shift(),
 [keys.shift()]: values.shift(),
 [keys.shift()]: values.shift(),
};
```

This isn't the prettiest way of creating objects, but it's effective if you find yourself with equal length arrays and fancy saving yourself some time.
