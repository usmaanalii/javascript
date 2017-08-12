# Classes

## Prototypal Inheritance Review

To better understand Classes in Javascript, it's important to have an understanding of `prototypal inheritance` which is why it's reviewed at the start of this section.

The concept of inheritance comes from the object oriented programming approach, and refers to the fact that instances of classes will inherit the methods that the class was created with.

So, if you made a Class with a method called `sayHello` whose only functionality was to  `console.log('hello')`, then all instances of that Class would have access to that method, which could be invoked simply by `instanceName.sayHello()`

In Javascript, objects will inherit from the `Prototype`, which itself is an `Object`, but explaining that paradoxical relationship is way beyond my current skill level. What this means, for our level of understanding is that, we can add methods to the prototype such that they can be accessed by instance methods.

An example is shown below.

``` javascript
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const snickers = new Dog('Snickers', 'King Charles');

Dog.prototype.bark = function () {
  console.log(`Bark Bark! My name is ${this.name}`);
};
```
 Here, the `Dog` object constructor (a sort of function description for creating `Objects`) has been created, which will allow you to create `Dog` objects. The `bark` method has been added to the prototype of Dog. Now, calling `snickers.Dog()` will log the contents of the method.

[Back to top](#top)
**********

## Say Hello to Classes

In the previous section, we discussed the idea of `Constructor` functions that allow us to make Objects that can inherit certain methods and properties. Well, this language construct has been made a little easier with the addition of the `Class` functionality in ES6. Now, instead of creating these constructor functions, we can use the `Class` keyword to similar and enhanced functionality.

Creating classes, is pretty similar to the way you would define a constructor, except classes require a `constructor` method. This is used to set initializer properties, that you are declared in instances. The functionality to create a basic Dog class, like the previous example is shown below.

``` javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

const snickers = new Dog('Snickers', 'King Charles');
```

This demonstrates a new way of achieving functionality we already had. Classes allow for further enhancements. An example of this, is the ability to add `static` methods to classes. These will allow you to associate the `Class` itself with a method, which means it can be called **without** an instance.

``` javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static info() {
    console.log('A dog is not better than a cat');
  }
}

const snickers = new Dog('Snickers', 'King Charles');
```

Calling `Dog.info()` will return the statement from the method, however calling `snickers.info()` will produce an error.

**Note**, commas are not allowed after the constructor function, so be sure to leave them out.

Another useful addition is the ability to add getters and setters. Both `get` and `set` are reserved keywords that allow you to extend the Classes functionality.

``` javascript
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  get description() {
    return `${this.name} is a ${this.breed} type of dog`;
  }
  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return this.nick.toUpperCase();
  }
}

const snickers = new Dog('Snickers', 'King Charles');
```

Now, you can set the nickname of the Dog, with `snickers.nicknames = 'Snick'`. To retrieve the nicknames simply access it like you would a property, with `snickers.nicknames`.

## Extending Classes and using super()

The concept of inheritance comes back in Class extension. What this allows us to do is, creating further classes that are based off another class, commonly called its super or parent class. This is useful, if you wish to utilize many methods that have already been created in another class but wish to add class specific features.

The following, is an example of an Animal class that has methods and properties given to all instances of it.

``` javascript
class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  drink() {
    this.thirst -= 10;
    return this.thirst;
  }
  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}
```

Say, you wish to create a Dog class that needs all of the methods and properties given to the Animal class, but want to add a `bark` method. You could copy and paste the contents of `Animal` into the Dog class. But, an easier way is to simply `extend` it.

``` javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`Bark bark I'm ${this.breed}`);
  }

}
```

Now, you will notice the use of `super()`. What this does, is it calls the parent (Animal) class constructor, and instantiates it using the parameter given. So, passing `name` will create an Animal class with `this.name = name`, in your Dog class, allowing. This allows you to go ahead and build off it.

[Back to top](#top)
**********

## Extending Arrays with Classes for Custom Collections

A quite interesting use case is shown here, which involves extending the built in `Array` type, to create your own custom arrays with additional methods. Just like in the previous section, you simply need to `extend` from the `Array`.

``` javascript
class MovieCollection extends Array {
  constructor(name) {
    this.name = name;
  }
}
```

TODO: Finish this


[Back to top](#top)
**********
