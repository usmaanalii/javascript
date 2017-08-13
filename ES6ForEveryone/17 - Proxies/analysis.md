# Proxies

## What are Proxies?

This is a new object, that allows you to add custom behavior to a set of commonly used operations. There is a list of operations that can be customized, which can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

The general functionality of these, are that you can interrupt the way an operation would usually work, and add further modifications or checks to better tailor the operation to your needs.

To create a `Proxy` you need to provide, the object in which your trying to modify, along with a `handler` object. The handler will then contain a list of operations (one form the list specified) that have been redesigned to produce whatever functionality you wish.

``` javascript
const person = { name: 'Wes', age: 100 };
const personProxy = new Proxy(person, {
  get(target, name) {
    return target[name].toUpperCase();
  },
  set(target, name, value) {
    if (typeof value === 'string') {
      target[name] = value.trim().toUpperCase();
    }
  },
});
```

Here, the `get` and `set` methods have been modified, to return the upper case versions of the properties added to the `person` object. So, using `person.friend = 'usy'` to set the friend property, will actually insert `USY` into the friend attribute.

[Back to top](#top)
**********

## Another Proxy Example

The example shown here, can be applied to a variety of scenarios, but for demonstration purposes, phone numbers is a pretty common issue. As we all know, there are many ways and formats that people will use to present their phone numbers. To get this type of data to a uniform format, proxies can be used. This involves the `get` and `set` operations being updated.

``` javascript
const phoneHandler = {
  set(target, name, value) {
    target[name] = value.match(/[0-9]/g).join('');
  },
  get(target, name) {
    return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
  },
};

const phoneNumbers = new Proxy({}, phoneHandler);
```

The `set` method will take in the numeric values between `0-9` and join them, removing any `-`, `()` or whitespace from the phone numbers added. So, `+123 (444) 789` will be set as `123444789`.

For retrieval, the `get` method utilizes a `replace` method to format the (now) uniformly set number. It will return `123444789` as `(123)-444-789`.

**Note** the use of an empty object `{}` in the `Proxy` object creation. This demonstrates, that you don't need a predefined object to customize.

## Using Proxies to combat silly errors

If you are into creating API's or, any code that is intended to be used by others, then this is definitely something to make use of. It's another use case for Proxies, that will help to reduce silly errors associated with accessing properties of Objects.

Let's say, you wish to use an API that has `id` properties of some sorts. You might run into the issue of being unsure about what case is needed to access the particular attribute. Is it `id` or `ID`?

Well, you can handle this particular use case, by adding error checking through the `set` method. Here, you'll see the addition of case checking for Object keys, which are designed to avoid the case issue.

``` javascript
const safetyHandler = {
  set(target, name, value) {
    const likeKey = Object.keys(target).find(k => k.toLowerCase() === name.toLowerCase());

    if (!(name in target) && likeKey) {
      throw new Error(`Oops! Looks like we already have a(n) ${name} property but with the case of ${likeKey}`);
    }

    target[name] = value;
  },
};

const safety = new Proxy({ id: 100 }, safetyHandler);
```

Now, if you attempt to use a different case for a property that has already been created, you will receive a well informed error message.

So, for example

``` javascript
safety.ID = 200;

/*  Uncaught Error:
    Oops! Looks like we already have a(n) ID property but with the case of id
    at Object.set (proxies-case-saftey.html:14)
    at
*/
```

**Note** using the `handler` of `Proxy` as a separately defined Object.

[Back to top](#top)
**********
