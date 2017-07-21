# Template Strings

## Template Strings Introduction

When you wish to embed variables in strings, its common to see a lot of concatenation in older Javascript code. Now, a much easier way of doing this has been introduced.

``` javascript
const name = 'Snickers';
const age = 2;
const sentence = `My dog ${name} is ${age * 7} years old`;
```

**Note** the use of `backticks` instead of `''` quotes.

[Back to top](#top)
**********

## Creating HTML fragments with Template Literals

Working with HTML is much more effective using template literals. We are no longer subject to the issues of whitespace in our strings. Using backticks, allows us to use whitespace freely.

The true power of this feature comes from the ability to utilise nested template literals, the example below shoes the ability to create a `HTML unordered list` and iteratively add child `list` items with the contents from a javascript object.

``` javascript
const dogs = [
{ name: 'Snickers', age: 2 },
{ name: 'Hugo', age: 8 },
{ name: 'Sunny', age: 1 },
];

const markup = `
<ul class="dogs">
    ${dogs.map(dog => `
    <li>
      ${dog.name}
      is
      ${dog.age} * 7
    </li>`).join('')}
  </ul>
`;
```

Along with this, we have the power to use `ternary` operators to conditionally add variables to our markup

``` javascript
const markup = `
  <div class="song">
    <p>
      ${song.name} - ${song.artist}
      ${song.featuring ? `(Featuring ${song.featuring})` : ''}
    </p>
  </div>
`;
```

An advanced use case for template strings is utilising a function to render pieces of HTML within your template strings. This helps with making them cleaner and more modular.

``` javascript
const beer = {
  name: 'Belgian Wit',
  brewery: 'Steam Whistle Brewery',
  keywords: ['pale', 'cloudy', 'spiced', 'crisp'],
};

function renderKeywords(keywords) {
  return `
    <ul>
      ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
    </ul>
  `;
}

const markup = `
  <div class="beer">
    <h2>${beer.name}</h2>
    <p class="brewery">${beer.brewery}</p>
    ${renderKeywords(beer.keywords)}
  </div>
`;
```

[Back to top](#top)
**********

## Tagged Template Literals

If you wish to modify the template literal that you are returning you can use a tagged function. This is placed before the template strings and referenced without the `parenthesis`.

``` javascript
function highlight(strings, ...values) {
  let str = '';
  strings.forEach((string, index) => {
    str += `${string} <span contenteditable class="h1">${(values[index] || '')}</span>`;
  });

  return str;
}

const name = 'Snickers';
const age = 100;

const sentence = highlight`My dog's name is ${name} and he is ${age} years old`;
```

**Note** the highlight method will take the data from the template literal in the form of `strings` and `values`, for example

- `string[0]` = `My dog's name is `
- `values[0]` = `Snickers`

These are used to build the template literal that is added by the tagged function.

### Aside

`contenteditable` allows users to update the content thats wrapped within it's tag.

[Back to top](#top)
**********

## Santizing User Data with Tagged Templates

When you start writing code that you expect users to use, security concerns to be handled properly. One of the easiest ways for users to hack into your web applications is via `XSS attacks`. An example of this is, by inserting Javascript through user input queries.

Template strings can be susceptible to this, therefore utilising a security library of some sort is highly recommended.

``` javascript
function sanitize(strings, ...values) {
  const dirty = strings.reduce((prev, next, index) => `${prev}${next}${values[index] || ''}`, '');

  return DOMPurify.sanitize(dirty);
}

const first = 'Wes';
const aboutMe = sanitize`I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');" />`;

const html = `
  <h3>${first}</h3>
  <p>${aboutMe}</p>
`;
```

The example demonstrates a potential security concern that could occur if the variables `first` and `aboutMe` were a result of user input. The `sanitize` tagged function uses a method from a well known library called `DOMpurify` to strip away the `onload()` attribute injected into the `aboutMe` variable.

[Back to top](#top)
**********
