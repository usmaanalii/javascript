# An Array of Array Improvements

## Array.from() and Array.of()

When you are working with elements on a webpage, and you wish to extract a `list` of items, you might use `querySelectorAll`. Doing this will return a `NodeList`. The biggest issue with them, is that they are **not** Arrays, therefore don't have the expected methods inherited from the Array prototype.

To be able to manipulate the list of items that you have extracted using methods like `map` and `reduce`, you'll need to convert them first.

``` javascript
const people = document.querySelectorAll('.people p');
const peopleArray = Array.from(people, person => person.textContent);
```

This code, shows the use of `Array.from` to convert the extracted p elements, which can now be manipulated. One cool thing about `Array.from` is that it takes a second argument, which is a method that will be mapped onto each element of the new Array.

An excellent use case was shown in this video, which is converting the arguments passed to a function to an Array, for the same purpose as discussed previously.

``` javascript
function sumAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}
```

If you attempt to use the arguments without this conversion, you'll encounter the same problems as `NodeList`.

**Note** according to the `air-bnb-eslint` style guide (one of the most widely used es6 linting styleguides), it's best to use the `rest` operator when manipulating the arguments object. I have shown how the above code would translate to pass this linter.

``` javascript
function sumAll(...args) {
  const nums = Array.from(args);
  return nums.reduce((prev, next) => prev + next, 0);
}
```

Finally, `Array.of` is simply what it sounds like. It takes a bunch of arguments and will return an Array of them.

``` javascript
const ages = Array.of(12, 4, 23, 62, 34);
```

[Back to top](#top)
**********

## Array. find() and .findIndex()

Sometimes, you might deal with arrays that are hard to filter through. Take this example, where each index holds an object with multiple properties.

You may need to extract certain properties and values for specific objects. We now have, the `find` and `findIndex` methods that will help with this. Both methods take a code block as a parameter, where you can specify filtering conditions and other pieces of code to extract the results you need.

``` javascript
const code = 'VBgtGQcSf'
const post = posts.find(post => post.code === code);
const postIndex = posts.findIndex(post => post.code === code);
```

Using `find` will return the entire object that has the property `code` matching the variable you defined earlier. Whilst, `findIndex` will return the index number within the array of the object matched.

[Back to top](#top)
**********

## Array .some() and .every()

These array methods are not commonly used, but they do exactly what you might think. The methods will take some condition that you wish to filter the arrays on, and return `true` or `false` depending on whether some values pass or all values pass.

``` javascript
const ages = [32, 15, 19, 12];

// 👵👨 is there at least one adult in the group?
const adultPresent = ages.some(age => age >= 18);
console.log(adultPresent); // true

// 🍻 is everyone old enough to drink?
const allOldEnough = ages.every(age => age >= 19);
console.log(allOldEnough); // false
```

[Back to top](#top)
**********
