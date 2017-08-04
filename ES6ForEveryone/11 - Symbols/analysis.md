# Symbols

## Symbols

This is a relatively short introduction to `Symbols`, I'm sure that more use cases will be thought of for them, but in this example, we are shown how to handle duplicate keys in our objects.

The power of `Symbols`, which are a new `type` in Javascript, are in their uniqueness. Each Symbol that is created, will always be unique, regardless of what parameter is passed in their instantiation.

``` javascript
const wes = Symbol('Wes');
const person = Symbol('Wes');

wes === person // false
```

Using this unique property, you can handle occasions where you might need keys to have the `same` value. This is shown in the following object, where it is not entirely ludicrous to think two people might have the same name.

``` javascript
const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
};
```

This way, you have two keys that can be referred to as `Olivia`. One caveat of using `Symbols` is that they aren't enumerable, so iteration is off limits.
