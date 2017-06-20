## Type Ahead

What I learned on this mini-project.

*******

### fetch

In this case, fetch is used to retrieve data from a url leading to a JSON data source.

``` javascript
fetch(endpoint).then(blob => blob.json());
```

This will return a promise, that can then be resolved to retrieve the data via `json()`, the following code will add the data to an array

``` javascript
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));
```

**Note** Use of the `... spread` operator to push each data object into the array instead of it entirely (which would push the entire data source at index 0)

### RegExp

In order to use a variable as your matched string, you need to create a RegExp.

``` javascript
const regex = new RegExp(wordToMatch, 'gi');
```

This can then be used in `match()` methods for example

``` javascript
return place.city.match(regex);
```
