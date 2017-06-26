## Javascript Reference vs Copying

What I learned on this mini-project.

*******

### strings, numbers and booleans

Javascript will make copies of these types, so changing the values like below
is okay

``` javascript
let age = 100;
let age2 = age;

age = 200;
```

In this case, the `age2` variable will keep its original value of `100`

### array

When dealing with arrays, you need to be aware of the concept of references.

``` javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
```

Here, modifying the `team` array's values will impact on the players array, for
example

``` javascript
team[3] = 'Lux';

console.log(players[3]); // 'Lux'
```

To leave the original array intact, you must make copies it. There are multiple
methods of doing this, some are shown below

``` javascript
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
```

### objects

The same principle of referencing from arrays apply here.
To copy an object to another variable, use the following example

``` javascript
const person = {
    name: 'Wes Bos',
    age: 80
};

const cap2 = Object.assign({}, person, { number: 99 });
```

The `Object.assign()` method takes in a

- `target` - In this case, this is a blank object `{}`
- `sources` - Object(s) to add

**Note**

- `{number: 99}` - This will modify the existing age variable in person
