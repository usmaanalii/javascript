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

In this example, we see the benefits of using multiple Promises in the same flow. The goal here, is to take two lists of dictionaries (used to mimic extracts from a database), and use promises to join them. We're essentially matching an attribute from property across both dicts and extracting the required values.

I'll show you the code first, and then try my best to explain.

``` javascript
const posts = [
  { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using a setTimeout to mimic a database
    setTimeout(() => {
      // find the post we want
      const post = posts.find(singlePost => singlePost.id === id);
      if (post) {
        resolve(post); // send the post back
      } else {
        reject(Error('No Post Was Found'));
      }
    }, 500);
  });
}

function hydrateAuthor(post) {
  // create a new promise
  return new Promise((resolve, reject) => {
    // find the author
    const authorDetails = authors.find(person => person.name === post.author);
    if (authorDetails) {
      // "hydrate" the post object with the author object
      post.author = authorDetails;
      resolve(post);
    } else {
      reject(Error('Can not find author'));
    }
  });
}

getPostById(1)
  .then(post => hydrateAuthor(post))
  .then((post) => {
    console.log(post);
  })
  .catch((err) => {
    console.error(err);
  });
```



The `getPostById` function uses a promise to find the post id matching the parameter provided. In the case that the post is found, the id will be passed via `resolve`. If the id isn't matched in the list of dicts, then a suitable `Error` will be passed on.

As you can see, a function called `hydrateAuthor` has also been created. This uses Promises again. The same `find` method is used, to retrieve properties of data from one of the list of dicts. If the author of the post provided is matched, then the post list of dicts will be updated. If it isn't matched, then again, a suitable `Error` message is returned.

All of the `then` chains at the bottom of the file are reacting to the (if successful) posts being returned by `resolve`. If any of the `reject` methods are invoked from either function, then the `catch` method chained to the end, gets its chance to display the `Error` message associated with the function that failed.

 
[Back to top](#top)
**********

## Working with Multiple Promises

Sometimes you might want to deal with multiple API's, and use the data returned from both of them together. Promises have an `all` method that allows you to group promises together and use the `resolve` data passed from both promises.

You pass the promises as an `array`, and use them just like you would in `then` methods.

``` javascript
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetsInfo] = responses;
    console.log(weatherInfo, tweetsInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then((responses) => {
    console.log(responses);
  });
```

This example shows that, `reject` methods are not a requirement when creating promises.
