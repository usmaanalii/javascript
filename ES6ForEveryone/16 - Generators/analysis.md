# Generators

## Introducing Generators

Generators in theory are not too difficult to explain, the tricky part however comes with demonstrating their application. From my understanding, they are intended to be used for optimizing your code's performances by running pieces of code at the right times (not just during regular execution).

Generators allow you to pause the **state** of your functions or loops and return at that state. Two things are needed when creating them, an asterisk **(*)** and the `yield` keyword.

``` javascript
function* listPeople() {
  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}
```

 Once, you have your generators, you must assign them to a value.

 ``` javascript
const people = listPeople();
 ```

Now, people represents a generator that can be iterated through, but with finer control. At the end of the day, generators are iterable objects, and anything iterable is something that can be looped over. Generators come with a `next` method that allows you to retrieve the next value. So running `people.next()` here will return or `yield` 0 on the first run.

If you run this code in your console, you'll see that, an object is actually, whats returned.

``` javascript
people.next(); // {value: 0, done: false}
```

This `done` property is what's keeping track of whether or not there is another item to `yield`.

Perhaps a slightly more real world use case for generators are for when returning items from an array. You can create the generator the same way, and utilize the `for of` in it.

Let's say you have an array with a bunch of objects that you wish to retrieve one by one through some sort of method. But you wish to keep track of where the current `pointer` is.

``` javascript
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
  for (const item of arr) {
    yield item;
  }
}

const inventorGen = loop(inventors);
```

The following `inventorGen` generator, when ran with `inventorGen.next();` will return the first element of the `inventors` object in an object with an associated `done` value. As you continue to run `inventorGen.next()` you can retrieve the following inventor object and so on.

## Using Generators for Ajax Flow Control

TODO: Finish this
