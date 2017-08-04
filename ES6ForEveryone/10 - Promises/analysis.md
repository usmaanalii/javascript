# Promises

## Promises

Before deciding to learn ES6, from time to time I would come across articles explaining certain concepts that I was struggling with. A lot of the time, these would contain things such as `then`, `resolve` and `reject`. After looking into these terms, I came across `promises`. I've read about them a few times but have always found them a little tricky to understand.

My fairly basic understanding of them is that, they are pieces of code that you use to request some sort of data. Since Javascript is largely asynchronous, in the background this request will experience three states

1. Pending
2. Resolved
3. Rejected

Promises are essentially designed to help you manage the code you wish to run (through `callbacks`) whilst the promise is in these states.

In this example, we are shown the `fetch` method which is used to request data from some a url, this particular example leads to a `JSON` data source. The `fetch` method inherently returns a promise, that you can react to.

``` javascript
const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
postsPromise
  .then(data => data.json())
  .then((data) => { console.log(data); })
  .catch((err) => {
    console.log(err);
  });
```

Here, you will see multiple `then` methods tacked on to the `promise`. These themselves return promises and take in code blocks that will be run on `resolve` and `reject`, which means you can respond to both successful and unsuccessful retrieval of data.

If the `promise` is successful i.e `resolved` then the data will be parsed via `json()` and logged to the console. However, if it is unsuccessful, then the error message will be logged to the console, this is handled via `catch`. The catch method also returns a promise, but only handled rejection cases.

[Back to top](#top)
**********

## Building your own Promises

The previous example demonstrated a single use case for promises, dealing with data retrieval, but they can be used in a variety of scenarios. The main reason to start adopting this functionality is through it's asynchronous property. By writing code in this way, you can improve the speed and efficiency of your applications, it allows you to get work done whilst the slower stuff runs in the background.

You can create your own promises through the `Promise` object. All promises take two parameters, `resolve` and `reject`. These are used to handle the two potential states the promises will hold (other than `pending`). Within your promises you can then build the code to react to both cases.

In this example, we use `setTimeout` to build a `reject` callback, that runs when the promise is unsuccessful. Following the promise definition, you can attach `then` and `catch` blocks to handle the data passed to the `reject` parameter.

``` javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Err Wes isn\'t cool'));
  }, 1000);
});

p.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.error(err);
});
```

[Back to top](#top)
**********

## Chaining Promises + Flow Control

[Back to top](#top)
**********

## Working with Multiple Promises
