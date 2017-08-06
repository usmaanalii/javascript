# JavaScript Modules and Using npm

For the longest time, I've been seeing references to `webpack` on various blog posts and tutorials online, after these videos, I can finally say that I get it!

If you were like me, and tried to find decent guides on how to start using webpack, I'm sure you either came short, or spent way too long finding it.

So, from my perspective, webpack in essence is fairly simple (if you choose to look at it my way). It allows you to utilize the concept of JavaScript modules for the web. Since I've spent a lot of time with `Python`, the idea of modules isn't that foreign, but for those of you who are alien to it.

Modules allow you to split your code into separate chunks, with their own scopes, leading to a more `modularized` codebase that has increased scalability and is more extensible.

Before using webpack, you need to install it, via `npm`, which is the node package manager, almost all programming languages will their own package managers, which serve the purpose of allowing developers to share commonly used code. Once it's installed (along with some `babel` stuff), you need to write the `webpack.config.file`.

``` javascript
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: '_build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules'],
        },
      },
    ],
  },
  plugins: [
    // uglify.js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
    // env_plugin
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
};
```

I figured I'd show it before I **tried** to explain it. My biggest peeve when it came to trying to learn webpack prior to this, was that the config file was way too confusing and the documentation even more so. But working through the video, with a little existing knowledge, I feel like, I know enough to get by.

To begin with, you need to `require` webpack, which is essentially ES2015's `import` method. This is because, at the time, the video was made, you couldn't use the `import` feature. I'm not sure if this is still the case. After this the `nodeEnv` constant is declared, which allows you to define your development or production environments*.

I'll try my best to explain **what I do know** about the config file. The `entry` and `output` elements are pretty self explanatory. Your `entry`, is a base JavaScript file, which imports all the necessary code for your web app to function, whilst the `output` is the bundled version, that has been converted to browser readable code.

All of the things to do with `source map`, will make your code easier to debug in the browser, this is because it tracks all of your code from the bundled file to where it was originally written. The `UglifyJsPlugin` adds the `sourceMap` functionality, whilst also compressing it, removing whitespace and reducing its size, for better optimization. It also removes the `comments`, all of these settings are provided to the `UglifyJsPlugin` method as options.

The `loaders` from my understanding, deal with the conversion of `es6` code to browser readable ES2015, whilst also eliminating the addition of `node_modules` to the bundled file (which would make it huge).

Some examples of features that this new setup allows you to use are...

`src/user.js`

``` javascript
import slug from 'slug';

export function createURL(name) {
  return `${url}/users/${slug(name)}`;
}
```

This imports the `slug` method from an npm package with the same name. Now, you can use the method in your own code without importing the whole package into the file. It's used in a function that you design to be imported (by `app.js`), the `export` keyword is what allows you to import it from other files. For more information on exports, go [here](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export).

`app.js`

``` javascript
import createURL, gravatar from './src/user';

const profile = createURL('wes');

console.log(profile);
```

Here, we import the function that we defined, and use it in our base JavaScript file.

One final thing, which is pretty important. In the `package.json` file, the `"script"` key has been given some information.

``` javascript
{
  "name": "es6modules",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "build": "webpack --progress --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "base-64": "^0.1.0",
    "flickity": "^2.0.9",
    "insane": "^2.6.2",
    "jsonp": "^0.2.1",
    "lodash": "^4.17.4",
    "slug": "^0.9.1"
  },
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-es2015-native-modules": "^6.9.4",
    "webpack": "^3.4.1"
  }
}
```

What this does is, it creates a `build` task, that can be ran with `npm run build` from within your root directory. When doing this, your bundle will be created as you save file changes. It might be useful to also set up some hot reloading to make development much more efficient.
