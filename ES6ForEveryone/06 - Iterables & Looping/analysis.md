# Iterables and Looping

## The for of loop

In Javascript we are given many ways of iterating over data structures. Perhaps the most common is the traditional `for (var i = 0; i < arr.length; i++)` (remember its `let var i = 0` now). Unfortunately, this loop is a little too verbose for beginner programmers and can cause confusion.

There are other options available to try and implement similar functionality, but a lot of them fall short in various different ways.

``` javascript
cuts.forEach((cut) => {
  console.log(cut);
});
```

The `forEach` loop will perform well for a lot of cases, but the issue with them is that they don't let you skip iterations or abort the loop (via `break` or `continue`).

``` javascript
// Iterates over EVERYTHING including added proto methods or properties
for (const index in cuts) {
  console.log(cuts[index]);
}
```

Another contender is the `for in` loop, which has more intuitive syntax. It falls short of being able to replace the traditional for loop on account of the fact that it includes **everything** in its list of variables to iterate over. This includes prototype methods and properties of the data type being iterated on.

ES6 has introduced a new `for of` loop that has no such shortcomings.

``` javascript
for (const cut of cuts) {
  if (cut === 'Brisket') {
    continue;
  }
  console.log(cut);
}
```

This looping mechanism will allow you to break out of loops, skip iterations and importantly iterate over the right things, except for objects (discussed further down).

[Back to top](#top)
**********

## The for of loop in Action

You might have encountered generators in other languages, but not so much in Javascript. I've experienced them from my time working with Python. To cut it really short, my understanding of them, is that they allow you to save the labor intensive computation of iterations until they are called. This is unlike a regular loops, that will create the values right away.

Using the `entries()` method on an iterable will result in an iterator that has the properties to be used as a generator

``` javascript
const cuts = ['Chuck', 'Brisket', 'Shank', 'Short Rib'];

for (const [i, cut] of cuts.entries()) {
  console.log(`${cut} is the ${i} item`);
}
```

Here, `cuts.entries()` has a next() method that allows you to retrieve the next value in the iterable.

**Note** the cool use of destructuring to assign variables within the for loop.

The for of loop comes in handy because it allows you to iterate over items that are not necessarily always arrays. If you've ever had to convert a `NodeList` to an array, to iterate over it, this is no longer an issue.

``` javascript
const ps = document.querySelectorAll('p')

for (const paragraph of ps) {
  paragraph.addEventListener('click', function () {
    console.log(this.textContent);
});
}
```
[Back to top](#top)
**********

## Using for of with Objects

When looping through objects, its common to see people use the `for in` loop, since that has been designed to iterate over enumerable properties, both integer and non-integer.

``` javascript
for (const prop in apple) {
   const value = apple[prop];
   console.log(prop, value);
 }
```

If you wish to use the aforementioned `for of` loop then you need to use the `Object.keys` method to iterate over an objects properties, this adds an unnecessary step, so its recommended to stick with `for in` for the time being.

``` javascript
for (const prop of Object.keys(apple)) {
    const value = apple[prop]
    console.log(value, prop);
  }
```

**Note**, using these loops will include `inherited` properties, a neat trick is to use `hasOwnProperty` to exclude these.

``` javascript
for (var prop in apple) {
  if (apple.hasOwnProperty(prop)) {
    console.log(prop, value);
  }
}
```
[Back to top](#top)
**********
