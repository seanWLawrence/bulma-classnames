<div align="center">
<h1>bulma-classnames</h1>

<img height="80" width="80" alt="goat" src="./assets/made-for-bulma.png" />

<p>Simple utility for creating declarative classnames in JSX for <a href="https://bulma.io" title="Bulma CSS">bulma.css</a> using JavaScript objects.</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-47-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]
[![Join the community on Spectrum][spectrum-badge]][spectrum]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

Writing long classnames for the Bulma.css stylesheet inline makes your code ugly and is hard to read at a glance, for example:

```html
<h1 className="has-text-primary is-size-1-desktop is-size-2-tablet is-size-3-touch is-size-4-mobile has-text-left-mobile has-text-centered-desktop">Hello, world!</h1>
```

This problem gets even worse when you start to nest components and have a giant mess of spaghetti, for example:

```html
<h1 className="has-text-primary is-size-1-desktop is-size-2-tablet is-size-3-touch is-size-4-mobile has-text-left-mobile has-text-centered-desktop">
  Hello, 
  <a href="/world" className="has-text-secondary is-capitalized has-text-weight-bold">
    world!
  </a>
</h1>
```

Ugh!

## This solution

The `bulma-classnames` utility package helps you write these classnames using a simple javascript object in a more readable way. Here's the example from above rewritten in JSX and `bulma-classnames`:

```jsx
let styles = bulma({
  textColor: 'primary',
  textSize: ['1-desktop', '2-tablet', '3-touch', '4-mobile'],
  textAlign: ['left-mobile', 'centered-desktop']
});

<h1 className={styles}>
  Hello, world!
</h1>
```

And rewritten again inline if you prefer to do things that way:

```jsx
<h1 className={
  bulma({
    textColor: 'primary',
    textSize: ['1-desktop', '2-tablet', '3-touch', '4-mobile'],
    textAlign: ['left-mobile', 'centered-desktop']
  })
}>
  Hello, world!
</h1>
```

So much better, right?!

**What this package is not**:

- A stylesheet. This package will only take in a declarative JavaScript object and return a formatted string for you to use as a classname in your code. You'll still need to [install the Bulma.css stylesheet](https://bulma.io/documentation/overview/start/).
- Something that you'll use in a `<script>` tag in the browser. This package is designed to be used in a JSX environment, such as [React.js](https://reactjs.org), [Preact.js](https://preactjs.com) or [Inferno](https://infernojs.org/).

## Table of Contents

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Single values](#single-values)
  - [Multiple values](#multiple-values)
  - [Is, has, and raw](#is-has-and-raw)
- [API](#api)
  - [`backgroundColor: string` - adds "is-background-" to the front of the string](#backgroundcolor-string---adds-%22is-background-%22-to-the-front-of-the-string)
- [Learning Material](#learning-material)
- [FAQ](#faq)
- [Guiding Principles](#guiding-principles)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [Issues](#issues)
  - [🐛 Bugs](#%F0%9F%90%9B-bugs)
  - [💡 Feature Requests](#%F0%9F%92%A1-feature-requests)
  - [❓ Questions](#%E2%9D%93-questions)
- [LICENSE](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```sh
npm install bulma-classnames
```

Or via the yarn package manager:

```sh
yarn add bulma-classnames
```

## Usage

Simply import `bulma` into your file and use the function anywhere that you need to create a bulma classname string. The `bulma` function accepts a JavaScript object with as many of the accepted key:value pairs shown in the [API](#API) and returns a single, formatted string with all of the classnames.

```jsx
import bulma from 'bulma-classnames'

// this will create the following string
// 'has-text-primary has-text-left is-size-1-mobile is-size-2-tablet is-size-3-mobile'
let styles = bulma({
  textColor: 'primary',
  textAlign: 'left',
  textSize: ['1-desktop', '2-tablet', '3-mobile']
});

let MyComponent = (
  <h1 className={styles}>
    Hello, world!
  </h1>
)

/*
*
* And this is what will be rendered
* let MyComponent = (
*   <h1 className="has-text-primary has-text-left is-size-1-mobile is-size-2-tablet is-size-3-mobile">
*     Hello, world!
*   </h1>
* )
*
*/
```

You can also use the function inline if you prefer:

```jsx
import bulma from 'bulma-classnames'

let MyComponent = (
  <h1 className={
    bulma({
      textColor: 'primary',
      textAlign: 'left',
      textSize: ['1-desktop', '2-tablet', '3-mobile']
    })
  }>
    Hello, world!
  </h1>
)

/*
*
* And this is what will be rendered
* let MyComponent = (
*   <h1 className="has-text-primary has-text-left is-size-1-mobile is-size-2-tablet is-size-3-mobile">
*     Hello, world!
*   </h1>
* )
*
*/
```

### Single values

You can pass either a single string value:

```jsx
let styles = bulma({
  textColor: 'primary',
  textAlign: 'left'
})

// 'has-text-primary has-text-left'
```

### Multiple values

Or an array of values, which is extremely helpful for repetetive helpers with different values, like 'mobile,' 'tablet,' 'desktop,' etc. `bulma` will format each array value with the correct prefix and combine them all into the same classname string.

```jsx
let styles = bulma({
  textSize: ['1-desktop', '2-tablet'],
  textAlign: ['left-mobile', 'right-tablet', 'centered-desktop']
})

// 'is-size-1-desktop is-size-2-tablet has-text-left-mobile has-text-right-tablet has-text-centered-desktop'
```

And here's how you can change the name of the function during your import for a shorter syntax:

```jsx
import bulma as bc from 'bulma-classnames'

let MyComponent = (
  <h1 className={
    bc({
      textColor: 'primary',
      textAlign: 'left',
      textSize: ['1-desktop', '2-tablet', '3-mobile']
    })
  }>
    Hello, world!
  </h1>
)

/*
*
* And this is what will be rendered
* let MyComponent = (
*   <h1 className="has-text-primary has-text-left is-size-1-mobile is-size-2-tablet is-size-3-mobile">
*     Hello, world!
*   </h1>
* )
*
*/
```

### Is, has, and raw

Although it's preferred to use the most specific key instad of `is` or `has`, you can always use these helpers as an escape hatch or for simple helpers like `is-marginless`.

```jsx
let styles = bulma({
  is: ['marginless'],
  textAlign: ['addons', 'addons-right']
})

// 'is-marginless has-addons has-addons-right'
```

And here's an example of a _bad_ way to use the `is` and `has` helper, since it's harder to read at a glance and is less declarative:

```jsx
let styles = bulma({
  is: 'capitalized',
  has: ['text-right-mobile', 'text-left-desktop']
})

// 'is-capitalized has-text-right-mobile has-text-left-desktop'
```

And the _better_ way to accomplish the same example above, but more declaratively:

```jsx
let styles = bulma({
  textTransform: 'capitalized',
  textAlign: ['right-mobile', 'left-desktop']
})

// 'is-capitalized has-text-right-mobile has-text-left-desktop'
```

## API

Here's a list of all the accepted keys and their types.

### `backgroundColor: string` - adds "is-background-" to the front of the string

```javascript
bulma({
  backgroundColor: 'primary'
}) 
// => 'is-background-primary'
```

**color:** ```string``` - adds "is-" to the front of the string
```javascript
bulma({
  color: 'primary'
}) 
// => 'is-primary
```

**column:** ```string | string[]``` - adds "is-" to the front of each string and "column" to the end
```javascript
bulma({
  column: '10-mobile'
}) 
// => 'is-10-mobile column'

bulma({
  column: [ '10-mobile', '11-desktop', '12-widescreen']
}) 
// => 'is-10-mobile is-11-desktop is-12-widescreen column'
```

**offset:** ```string | string[]``` - adds "is-offset-" to the front of each string 
```javascript
bulma({
  offset: '10-mobile'
}) 
// => 'is-offset-10-mobile'

bulma({
  offset: [ '10-mobile', '11-desktop', '12-widescreen']
}) 
// => 'is-offset-10-mobile is-offset-11-desktop is-offset-12-widescreen'
```

**flex:** ```string | string[]``` - adds "is-flex" to the front of each string
```javascript
bulma({
  flex: 'mobile'
}) 
// => 'is-flex-mobile'

bulma({
  flex: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-flex-mobile is-flex-desktop is-flex-widescreen'
```

**inlineFlex:** ```string | string[]``` - adds "is-inline-flex" to the front of each string
```javascript
bulma({
  inlineFlex: 'mobile'
}) 
// => 'is-inline-flex-mobile'

bulma({
  inlineFlex: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-flex-mobile is-inline-flex-desktop is-inline-flex-widescreen'
```

**block:** ```string | string[]``` - adds "is-block" to the front of each string
```javascript
bulma({
  block: 'mobile'
}) 
// => 'is-block-mobile'

bulma({
  block: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-block-mobile is-block-desktop is-block-widescreen'
```

**inlineBlock:** ```string | string[]``` - adds "is-inline-block" to the front of each string
```javascript
bulma({
  inlineBlock: 'mobile'
}) 
// => 'is-inline-block-mobile'

bulma({
    inlineBlock: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-block-mobile is-inline-block-desktop is-inline-block-widescreen'
```

**inline:** ```string | string[]``` - adds "is-inline" to the front of each string
```javascript
bulma({
  inline: 'mobile'
}) 
// => 'is-inline-mobile'

bulma({
  inline: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-mobile is-inline-desktop is-inline-widescreen'
```

**textColor:** ```string``` - adds "has-text-color" to the front of the string
```javascript
bulma({
  textColor: 'primary'
}) 
// => 'has-text-color-primary
```

**textSize:** ```string | string[]``` - adds "is-size-" to the front of the string
```javascript
bulma({
  textSize: '6'
}) 
// => 'is-size-6'

bulma({
  textSize: ['5-mobile', '6-desktop', '7-widescreen']
}) 
// => 'is-size-5-mobile is-size-6-desktop is-size-7-widescreen'
```

**textWeight:** ```string``` - adds "has-text-weight" to the front of the string
```javascript
bulma({
  textWeight: 'bold'
}) 
// => 'has-text-weight-bold'

```

**textTransformation:** ``` string | string[]``` - adds "is-" to the front of the string (for better semantics than using ```is:```
```javascript
bulma({
  textTransformation: 'capitalized'
}) 
// => 'is-capitalized'

bulma({
  textTransformation: ['capitalized', 'italic']
}) 
// => 'is-capitalized is-italic'
```

**textAlign:** ``` string | string[]``` - adds "has-text-" to the front of the string
```javascript
bulma({
  textAlign: 'left'
}) 
// => 'has-text-left'

bulma({
  textAlign: ['left-mobile', 'right-desktop', 'center-widescreen']
}) 
// => 'has-text-left-mobile has-text-right-desktop has-text-center-widescreen'
```

**is:** ```string | string[]``` - adds "is-" to the front of each string

```javascript

bulma({
  is: 'primary'
}) 
// => 'is-primary'

bulma({
  is: ['primary', 'capitalized']
}) 

// => 'is-primary is-capitalized'

```

**has:** ```string | string[]``` - adds "has-" to the front of each string

```javascript
bulma({
  has: 'text-weight-bold'
}) 
// => 'has-text-weight-bold'

bulma({
  has: ['text-weight-bold', 'text-color-danger']
}) 

// => 'has-text-weight-bold has-text-color-danger'
```
**raw:** ```string``` - outputs the exact same string that is passed, no formatting is added
```javascript
bulma({
  raw: 'column'
}) 
// => 'column'
```

## Learning Material

- [Bulma.css documentation](https://bulma.io)

Feel free to contribute more!

## FAQ

<details>

<summary>Which get method should I use?</summary>

Based on [the Guiding Principles](#guiding-principles), your test should
resemble how your code (component, page, etc.) is used as much as possible. With
this in mind, we recommend this order of priority:

1.  `getByLabelText`: Only really good for form fields, but this is the number 1
    method a user finds those elements, so it should be your top preference.
2.  `getByPlaceholderText`:
    [A placeholder is not a substitute for a label](https://www.nngroup.com/articles/form-design-placeholders/).
    But if that's all you have, then it's better than alternatives.
3.  `getByText`: Not useful for forms, but this is the number 1 method a user
    finds other elements (like buttons to click), so it should be your top
    preference for non-form elements.
4.  `getByAltText`: If your element is one which supports `alt` text (`img`,
    `area`, and `input`), then you can use this to find that element.
5.  `getByTestId`: The user cannot see (or hear) these, so this is only
    recommended for cases where you can't match by text or it doesn't make sense
    (the text is dynamic).

Other than that, you can also use the `container` to query the rendered
component as well (using the regular
[`querySelector` API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)).

</details>

## Guiding Principles

> Long classname strings suck to write and suck to look at - JavaScript objects are much easier.

I think it's much more fun to write a declarative object in a small function to write my styles, while using the amazing Bulma.css stylesheet.

This package is a single function that formats the object with a class that has several [switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) and [reducer functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## Roadmap

- Flow types and TypeScript support

## Contributors

[Sean W. Lawrence](https://swl.netlify.com)

## Issues

Looking to contribute? Check out our roadmap and [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) on what you'd like to help with!

### 🐛 Bugs

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) for bugs, missing documentation, or unexpected behavior.

### 💡 Feature Requests

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

### ❓ Questions

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) if you have any questions about how to use this package.

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/react-testing-library.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/react-testing-library
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/react-testing-library.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/react-testing-library
[version-badge]: https://img.shields.io/npm/v/react-testing-library.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-testing-library
[downloads-badge]: https://img.shields.io/npm/dm/react-testing-library.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-testing-library
[spectrum-badge]: https://withspectrum.github.io/badge/badge.svg
[spectrum]: https://spectrum.chat/react-testing-library
[license-badge]: https://img.shields.io/npm/l/react-testing-library.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-testing-library/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-testing-library/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/react-testing-library.svg?style=social
[github-watch]: https://github.com/kentcdodds/react-testing-library/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/react-testing-library.svg?style=social
[github-star]: https://github.com/kentcdodds/react-testing-library/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-testing-library%20by%20%40kentcdodds%20https%3A%2F%2Fgithub.com%2Fkentcdodds%2Freact-testing-library%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/react-testing-library.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[set-immediate]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
[guiding-principle]: https://twitter.com/kentcdodds/status/977018512689455106
[data-testid-blog-post]: https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
[dom-testing-lib-textmatch]: https://github.com/kentcdodds/dom-testing-library#textmatch
[bugs]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/kentcdodds/react-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[reactiflux]: https://www.reactiflux.com/
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-testing-library

<!-- prettier-ignore-end -->