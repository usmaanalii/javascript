# Say Hello to ...Spread and ...Rest

## Spread Operator Introduction

When dealing with arrays, you must be aware of referencing, this has already been discussed in a previous post, but a common side effect of assigning an array to a new variable, is that changing its variables will mutate the original array too.

``` javascript
const pizzas = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const fridayPizzas = pizzas;

fridayPizzas[0] = "Canada Pie";
console.log(pizzas[0]); // Canada Pie
```

This behavior helps nobody and can be avoided by the elegant `spread` operator. What this does is, it takes an iterable, such as an `Array` or `string` and spreads its items into the data structure your using it in.

``` javascript
const fridayPizzas = [...pizzas];
```

The `fridayPizzas` Array is not longer a reference to pizzas, so modifying its values will not lead to a mutation of the original Array.

One really nice use case for the `spread` operator is, how it allows you to combine arrays and new values into newer Arrays. Instead of having to `concat` two arrays and push values, you can benefit from the ease of `...`.

``` javascript
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...specialty];
```

[Back to top](#top)
**********

## More Spread Examples

You might have suspected this was possible, but you can spread nested arrays just like regular ones.

``` javascript
const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese'],
};

const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
```

Another neat trick, or alternative to `Array.from` is to spread instead.

``` javascript
const people = [...document.querySelectorAll('.people p')];
```

This might not be as readable, but does look pretty sweet.

One of the more complicated use cases shown here, is recreating an array with the exclusion of an element. The trick here is to use both the spread operator and `slice` method to add items before the removal index (which is found via `findIndex`) and after it. The code for this is shown below.

``` javascript
const comments = [
  { id: 209384, text: 'I love your dog!' },
  { id: 523423, text: 'Cuuute! 🐐' },
  { id: 632429, text: 'You are so dumb' },
  { id: 192834, text: 'Nice work on this wes!' },
];

const id = 632429;
const commentIndex = comments.findIndex(comment => comment.id === id);

const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
```

[Back to top](#top)
**********

## Spreading into a function

This might seem trivial once you start using the spread operator, but it's worth mentioning anyway. So far, we've used the spread operator to add items into arrays, but this same functionality can be applied to add arguments to a function.

Pushing items of an array into another (without creating a new one) would require pushing items separately through something like `arr1.push('item1', 'item2')`. Using the spread operator, you can add each item of an array to the `push` method as separate arguments.

``` javascript
const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

inventors.push(...newInventors);
```

This method applies to your own functions as well, so if you have a method that runs with a lengthy number of arguments pretty frequently, you can use spreads to make calling the function a lot easier.

``` javascript
const name = ['Wes', 'Bos'];

function sayHi(first, last) {
  alert(`Hey there ${first} ${last}`);
}

sayHi(...name);
```

[Back to top](#top)
**********

## The ...rest param in Functions and destructuring

One thing you'll realize after using these new ES6 toys is that the names will start to make more and more sense. The `rest` operator epitomizes this. If you find yourself needing to assign parameters or array items into specific values, but have left over values that can be bundled together, then `rest` is your friend.

I think this is best explained by showing you an example first.

``` javascript
const runner = ['Wes Bos', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;
console.log(name, id, runs);
```

So here, we have an array of items. The first two values are significant and are assigned variable names `name` and 'id', but the `rest` are all values of the same nature. It would be tedious to give them all separate values. The best thing to do is to maybe, bundle them into a data structure for later use. Thats what the `...runs` does. It will take the items remaining and spread them into a runs array for later use.

You can do this within functions as well. Let's say you have a function that takes some required parameters, but a number of further optional arguments. You can define your functions to extract given parameters according to your needs and utilize them the way you want to.

``` javascript
function convertCurrency(rate, tax, tip, ...amounts) {
  console.log(rate, tax, tip, amounts);
  return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.54, 10, 23, 52, 1, 56);
```

This will take the first three parameters passed to represent `rate`, `tax` and `tip`. Whilst all the amounts will be passed in as an array.

[Back to top](#top)
**********
