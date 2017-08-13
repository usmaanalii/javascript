# Map and WeakMap

## Maps

In keeping with the theme of alternative solutions to storing items, we are introduced to the `Map`. These are very similar to `Sets`, but have the added benefit of being able to store pairings (much like a tuple in Python). Like `Sets` they are also constrained by the uniqueness of its items.

A nice feature of `Maps` are that both the key and value (if thats how you want to refer to them) can be any type*, which can make for an interesting data structure.

``` javascript
const dogs = new Map();

dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);
```

This will create a generic `Map` with three elements.

Iterating through the `Map` requires the `for of` loop. This gives an opportunity to use `destructuring` within your for loop, since each element is returned as an array.

``` javascript
for (const [key, val] of dogs) {
  console.log(key, val);
}
```
