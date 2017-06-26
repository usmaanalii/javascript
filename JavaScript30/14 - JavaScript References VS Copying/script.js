// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);
//
// let name = 'Wes';
// let name2 = name;
// console.log(name, name2);
// name = 'Wesley';
// console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log(players);

// and we want to make a copy of it.

// const team = players;

// team[3] = 'Lux';

// console.log(players, team);

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Hee haw';
console.log(team4);

const team5 = Array.from(players);
team5[3] = 'Cool';
console.log(team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// const captain = person;
// captain.age = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2);

// We will hopefully soon see the object ...spread

// const cap3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: 'Wes Bos',
    age: 100,
    social: {
        twitter: 'wesbos',
        facebook: 'wesbos.developer'
    }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

// performance issues
const dev2 = JSON.parse(JSON.stringify(wes));
