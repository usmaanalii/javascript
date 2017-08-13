# Sets and Weaksets

## Sets

These are something you might have encountered in other languages, I have seen them before in Python, where they are used very often. So, sets are essentially, very similar to a list, but the key difference is that the items in them must only occur once.

``` javascript
const students = new Set(['Wes', 'Kara', 'Tony']);

const dogs = ['Snickers', 'Sunny'];
const dogSet = new Set(dogs);

const people = new Set();
people.add('Wes');
people.add('Snickers');
people.add('Kait');
```

You can create a `Set` in multiple ways

- By providing values in an array
- By passing in an array that has already been defined
- By using the `add` method

Another major difference between other list data structures, is that, they can't be accessed based off indexes. There are many methods associated with Sets, perhaps the most commonly used will be, `has()`, `add()` and `values()`.

The `values` method, will return a `SetIterator` that can be used to loop through the contents of the Set. This means, the `values` will possess the `next` method that allows you to iterate over the elements of the Set. The `for of` loop comes in handy when you wish to do this.

``` javascript
for (const person of people) {
  console.log(person);
}
```

[Back to top](#top)
**********

## Understanding Sets With Brunch

This is an example of how effective Sets can be. By utilizing the generator functionality that the `SetIterator` comes with, you can achieve some pretty neat results.

So, let's say we have a Set, that we are adding items to.

``` javascript
const brunch = new Set();

brunch.add('Wes');
brunch.add('Sarah');
brunch.add('Simone');
```

We can turn this into a `SetIterator` that can be used to generate each item in sequence, by assigning it to a value.

``` javascript
const line = brunch.values();
```

This can then be used to extract items from the Set, in order, through the `next()` method. Remember, when generating values via `next`, you will receive an object with two properties `value` and `done`. So, if you want the actual value from the Set, then chain on `value` like so.

``` javascript
console.log(line.next().value); // Wes
console.log(line.next().value); // Sarah
```

The true power of this approach, comes when you begin to add items to the **original** Set. As you extract values from the `SetIterator` i.e `line` the pointer is being adjusted, and adding values to the original set simply tacks them onto the `line` generator to be included in the iterator as new `next()` objects.

So adding further items, such as those below, will mean they are accessible and available to be used in the already defined `SetIterator` brunch.

``` javascript
brunch.add('Heather');
brunch.add('Snickers');
```

``` javascript
console.log(line.next().value); // Simone
console.log(line.next().value); // Heather
```



[Back to top](#top)
**********
