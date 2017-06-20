## Array Cardio Day 1

What I learned on this mini-project.

*******

### filter

This can be used to assess each item of an array against a condition.

``` javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
```

Here, we used a more concise syntax. If the resulting boolean expression returns `true` it will 'pass the condition' and be returned in the filtered array.

- `inventor` takes the role of the current iterand, much like `i` in a traditional `for (var i = 0; i++; i < arr.length)` loop

### Array.from

This is useful when you wish to apply array methods to a node list extracted from a website (in this case wikipedia).

``` javascript
const links = Array.from(category.querySelectorAll('a'));
```

Now, you are able to apply, `map`, `reduce`, `sort` etc... to links.

### reduce

This method takes an array and attempts to wittle it down to a result you require.

``` javascript
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)
```

It's best to think of the parameters as an `accumulator` and `iterand` in this case. The `0` provides a starting point for the total, since at the start it would be `undefined`.

### reduce (part 2)

Perhaps a more complex use case for reduce is when trying to acheieve a result for multiple elements in an array.

The goal was to reduce each element to its accumulated number.

``` javascript
const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item] ++;

    return obj;
}, {});
```

The key in this case, was to use an `empty object` as the initial value for the object, and call `obj[key]` for each iteration.
