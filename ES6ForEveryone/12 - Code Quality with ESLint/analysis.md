# Code Quality with ESLint

For me, this module was a pleasant surprise. I'd been using linters as a result of the Atom editor for a while now, and all of the things mentioned, seemed to confirm that I was on the right track.

My short description of what a linter is, is that they are the equivalent of your word processors spell and grammar check, except for your code. Most likely, those, who were involved in developing or maintaining the language have come up with a best practice list of styling rules that they **recommend** you follow. If you're trying to become the best developer you can be, then acknowledging (and implementing) the industry standard, is not a bad way to go.

First and foremost, you should read up on how to install ESLint, it will most likely be through `npm` which is the node package manager. Once you have ESLint, it's important to have an `.eslintrc` file, which is what the linter will base it's styles on. The following file, demonstrates a neat way of approaching ES6 development.

You might be confused about seeing `airbnb`, but a quick google search, should explain far better than I can. My understanding is that, the `airbnb` developers must have rocked it, and created the best (current) ES6 styleguide that everybody seems to see as the industry standard.

``` javascript
{
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "airbnb",
  "rules": {
    # 0 off
    # 1 warning
    # 2 error
    "no-console": 0,
    "no-unused-vars": 1
  },
  "plugins": ["html", "markdown"]
}
```

This `linter` file utilises `es6` syntax and `browser` based methods, which are explicitly added to the `env` key. As mentioned before, the `airbnb` styleguide has been extended, which will pull in all of the styles that they suggest.

Rules, allows you to overwrite specific styles that `airbnb` have included, but you don't really agree with. To see the list of rules that they have specified, go [here](https://github.com/airbnb/javascript). Since, we spend a lot of the time in the console, I have disables the `no-console` error. You can see the comments before this, they represent the level of warning that the linter will raise when you violate the rule.

Plugins allow you to enhance the functionality of ESLint beyond what is provided out of the box. In this case, `html` will lint the Javascript, that you write in `<script></script>` tags, whilst `markdown` does the same when writing markdown files (like this one).
