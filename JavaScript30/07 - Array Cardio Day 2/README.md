## Array Cardio Day 2

What I learned on this mini-project.

*******

### Array.prototype.some()

Checks against the array, and returns `true` if at least one item meets the condition.

``` javascript
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);
```

- `new Date()).getFullYear()` gets the current year

### Array.prototype.every()

Checks against the array, and returns `true` if all items meets the condition.

``` javascript
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);
```

- `new Date()).getFullYear()` gets the current year

### Array.prototype.find()

Checks against the array, and returns the result of the item that meets the criteria (in this case it is an object)

``` javascript
const index = comments.find(comment => comment => comment.id === 823423);
```

### Array.prototype.some()

Checks against the array, and returns `array id` of the item that meets the condition.

``` javascript
const index = comments.findIndex(comment => comment.id === 823423);
```
