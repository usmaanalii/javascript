# ES6 Tooling

## Tool-Free Modules with SystemJS

Most of the features associated with ES6 are available to use in modern browsers*. But, perhaps the biggest thing is missing...the ability to use `ES6 Modules`.

If you've ever seen code with a bunch of `import` and `export` statements in browser code, then they will have used some sort of tooling to enable this feature. The concept of modules is very useful for separating your code into manageable components, so knowing about it and ideally putting into practice will serve you well.

Here, we are introduced to `System JS` which is beneficial for those of you who don't want to npm install all of the packages they wish to make use of. It can be used by inserting a simple script tag in your html scripts.

``` html
<script src="https://jspm.io/system@0.19.js"></script>
```

Once this has been added, you'll want to set the `transpiler` option to whichever you want to use, here we are focusing on `babel`. But other options exist, such as `typescript` and `traceur`. All that's left is to import your main javascript file. All of these can go in a `script` tag in the `body` of the html script.

``` html
<script>
  System.config({ transpiler: 'babel' });
  System.import('./main.js');
</script>
```

Utilizing your own code works the same way as before, just make sure to `export` the things you want and `import` them through one of of the options available.

`export.js`

``` javascript
export function addTax(amount, taxRate) {
  return amount + (amount * taxRate);
}
```

`main.js`

``` javascript
import { addTax } from './checkout'
```

`System JS` has its own way of dealing with external package imports, it's pretty simple. Instead of doing an `npm install` on the packages you wish to use and then importing them, you simply prefix the import statement with `npm:`. This tells `System JS` to go ahead and retrieve the package from `npm` and voila.

``` javascript
import { sum, kebabCase } from 'npm:lodash';
```

Now, you are free to use `lodash` as you please.

One significant caveat of this approach, is speed of compilation, which is to be expected of course.

## All About Babel + npm scripts

`Babel` is such a deep topic, that I can't even begin to explain, so I'm going to keep this brief and explain what I do know about it. So, `babel` is essentially the industry standard compiler for Javascript. It will take the ES6 code or ES2017 if you're brave, and compile it down to code that browsers can understand.

This is useful, for those who live on the cutting edge, and wish to use features that are yet (or may never) be added to the language.

In order to use `babel` compilation, you need to install the `babel-cli`, this allows you to run `babel` from the command line and compile under whatever build process you specify. If you visit [this site](https://babeljs.io/docs/plugins/), you'll see a bunch of plugins that can be installed for use in your compilation process.

There are different plugins for different features of the Javascript language, so if you wish to pull a certain feature but want to stick with regularly Javascript, you can. But for most people, the presets that have been developed are going to be easiest to use. These are groupings of features for common development environments.

Here we use `babel-preset-es2015`, which includes all of the agreed upon features of `ES6` such as arrow functions, spread operators and so on. You need to install this also, via `npm`.

A little configuration is required, in your `package.json` files. We, will set the `presets` option of `babel` to the `babel-preset-es2015` plugin we have already installed. Along with this, a nifty command has been added to `scripts` which will run `babel` on save (specified by `--watch`), the command also provides an input file and output file, which will represent the compiled and browser ready version.

``` javascript
{
  "name": "mybabel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "babel": "babel app.js --watch --out-file app-compiled.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-es2015": "^6.24.1"
  },
  "babel": {
    "presets": ["es2015"]
  }
}
```

Now, writing `ES6` code in the `app.js` file, and running babel will produce browser readable Javascript in `app-compiled.js`.

`app.js`

``` javascript
const age = 100;
```

`app-compiled.js`

``` javascript
var age = 100;
```

## Polyfilling ES6 for Older Browsers

One last thing to mention is the concept of polyfilling. This allows you to do all the things we have mentioned up there, but also cater to older browsers, with the simple addition of a `script` tag.

Simply adding this to your html files, will do the trick.

``` html
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```
