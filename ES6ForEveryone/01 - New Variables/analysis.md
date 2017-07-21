# ES6 For Everyone - New Variables: Creation, Updating and Scoping

## var scoping refresher

The introduction of `let` and `const` fixes a particular associated with `var`.

When `var` is used to declare a variable, it belongs to the functions scope.

**But what happens when var isn't used within a function definition?**

It get's applied to the functions parent scope, which could cause issues
elsewhere (particularly if it's parent is the global namespace).

New keywords `let` and `const` add a more precise scoping rule to their variable declarations, by fixing it to the `block`.

``` javascript
if (!true) {
    let x = 1;
}

console.log(x); // 1
```

You can't access `x` outside the block.

``` javascript
if (!true) {
    let x = 1;
}

console.log(x); // error
```

**********
## let vs const

If you wish to declare a variable that you intend on changing within your code then `let` assignments should be used.

``` javascript
let x = 0

if (x < 1) {
    x = 2;
}
```

On the other hand, `const` which stands for **constant** is designed to handle declarations for things that you wish to leave untouched.

``` javascript
const x = 0

if (x < 1) {
    x = 2; // error
}
```

One interesting use case for const, is how it handles objects. The same
functionality applies to the entire object, i.e you can't reassign it. But much like humans have the ability to  change their characteristics, objects properties can be changed.

``` javascript
const person = {
    name: 'usy',
    age: 22
};

person = {name: 'ali'}; // error
person.age = 23;

console.log(person.age); // 23
```

### Aside

Javascript has a method called `freeze` that takes an object as a parameter, that will prevent it from being modified (adding further constraints to a typical const declared object).

``` javascript
const usy = Object.freeze(person);

person.age = 21;

console.log(person.age); // 23
```

**********
## let and const real world

Dealing with scoping conflicts was a common issue for many programmers using `ES2015`. To counteract this, using `IIFE's` was fairly common. This would basically wrap any variables you declare inside a function scope resulting in
a less poluted global namespace.

``` javascript
(function() {
  var x = 1;
}());
```

Now, wrapping declarations in braces and capitalising
on the new block scoping rules makes for a more elegent solution.

``` javascript
{
  x = 1;
}
```

For loops are also beneficiaries of this scoping mechanism. By using
`let` instead of `var`, each iteration is given it's own scope,
so intermediate results can be handled more effectively. This is much different to using `var`, where each iteration will overwrite the variables defined each cycle.

``` javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}
```

**********
## temporal dead zone

One thing to look out for when using `const` and `let`, is that unlike
`var`, trying to use the variable **before** it was declared,
will result in an error.

``` javascript
console.log(pizza); // Reference Error
let pizza = 'Deep dish 🍕🍕🍕';
```

When using `var` variables before declaration, you will get `undefined`, this
is because the actual assigned value can't be accessed, but the fact that
it has been assigned is acknowledged.

## Is var dead? What should I use?

There are many different methodologies to choose from, but I will be using
the following guideline.

1. Use `const` by default
2. Use `let` if rebinding is needed
3. Don't use `var`
