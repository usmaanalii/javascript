# Additional String Improvements

## New String Methods

Some nice little methods have been introduced that allow you to assess different parts of the string for pattern matching.

``` javascript
// .startsWith()
course.startsWith('RFB');
flightNumber.startsWith('AC', 3);

// .endsWith()
flightNumber.endsWith('jz');
accountNumber.endsWith('RT', 11);
```

Both `startsWith()` and `endsWith()` do exactly what you might think. They operate on a string to assess, and take a `string to match` as a parameter. Additionally, you can add an index to start from, which is demonstrated above.

Along with this, is the `includes()` method, that returns a boolean representing whether or not the string passed, is located in the string being operated on.

``` javascript
// .includes()
flightNumber.includes('z');
```

Finally, a `repeat()` method has been added, which operates on a string, taking in an `integer` as a parameter.

``` javascript
'x'.repeat(10); // xxxxxxxxxx
```

An interesting example is shown in this video, that involves creating a function that adds custom padding to a string. By using `repeat`, applied to empty space, you can create this effect pretty easily.

``` javascript
function leftPad(str, length = 20) {
  return `➡️ ${' '.repeat(length - str.length)}${str}`;
}
```
