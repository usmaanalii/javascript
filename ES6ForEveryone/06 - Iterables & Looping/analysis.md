# Iterables and Looping

## The for of loop

xxxx

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

xxxx

[Back to top](#top)
**********
