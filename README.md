<div align="center">
<h1>bulma-classnames</h1>

<p>Simple utility for creating declarative classnames in JSX for <a href="https://bulma.io" title="Bulma CSS">bulma.css</a> using JavaScript objects</p>
</div>

[![npm](https://img.shields.io/npm/v/bulma-classnames.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/bulma-classnames)
[![Travis (.org)](https://img.shields.io/travis/seanWLawrence/bulma-classnames.svg?style=flat-square)](https://travis-ci.org/seanWLawrence/bulma-classnames)
[![Coveralls github branch](https://img.shields.io/coveralls/github/seanWLawrence/bulma-classnames/master.svg?style=flat-square&colorB=brightgreen)](https://coveralls.io/github/seanWLawrence/bulma-classnames)
[![GitHub last commit](https://img.shields.io/github/last-commit/seanwlawrence/bulma-classnames.svg?style=flat-square)](https://github.com/seanwlawrence/bulma-classnames/commits/master)
![GitHub issues](https://img.shields.io/github/issues-raw/seanwlawrence/bulma-classnames.svg?style=flat-square)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/bulma-classnames.svg?style=flat-square)
[![GitHub](https://img.shields.io/github/license/seanwlawrence/bulma-classnames.svg?style=flat-square)](https://github.com/seanWLawrence/bulma-classnames/blob/master/LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-blue.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

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
  - [Raw](#raw)
- [API](#api)
  - [`backgroundColor`](#backgroundcolor)
  - [`color`](#color)
  - [`column`](#column)
  - [`offset`](#offset)
  - [`flex`](#flex)
  - [`inlineFlex`](#inlineflex)
  - [`block`](#block)
  - [`inlineBlock`](#inlineblock)
  - [`inline`](#inline)
  - [`textColor`](#textcolor)
  - [`textSize`](#textsize)
  - [`textWeight`](#textweight)
  - [`textTransformation`](#texttransformation)
  - [`textAlign`](#textalign)
  - [`is`](#is)
  - [`has`](#has)
  - [`raw`](#raw)
- [Learning Material](#learning-material)
- [FAQ](#faq)
- [Guiding Principles](#guiding-principles)
- [Roadmap](#roadmap)
- [Contributors](#contributors)
- [Issues](#issues)
  - [Bugs](#bugs)
- [Feature Requests](#feature-requests)
- [Questions](#questions)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [LICENSE](#license)

## Installation

This module is distributed via [npm](https://npmjs.com) which is bundled with [node](https://nodejs.org) and
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

### Raw

`raw` is a simple way to add extra classnames without formatting them. Any string that you add in `raw` will be added to the end of the classname string.

```jsx
let styles = bulma({
  color: 'primary',
  raw: 'extra-classname another-classname'
})

// 'is-primary extra-classname another-classname'
```

## API

Here's a list of all the accepted keys and their types.

### `backgroundColor`

`string` - adds "is-background-" to the front of the string

```javascript
bulma({
  backgroundColor: 'primary'
})

// => 'is-background-primary'
```

### `color`

`string` - adds "is-" to the front of the string

```javascript
bulma({
  color: 'primary'
})

// => 'is-primary
```

### `column`

`string | string[]` - adds "is-" to the front of each string and "column" to the end

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

### `offset`

`string | string[]` - adds "is-offset-" to the front of each string

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

### `flex`

`string | string[]` - adds "is-flex" to the front of each string

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

### `inlineFlex`

`string | string[]` - adds "is-inline-flex" to the front of each string

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

### `block`

`string | string[]` - adds "is-block" to the front of each string

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

### `inlineBlock`

`string | string[]` - adds "is-inline-block" to the front of each string

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

### `inline`

`string | string[]` - adds "is-inline" to the front of each string

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

### `textColor`

`string` - adds "has-text-color" to the front of the string

```javascript
bulma({
  textColor: 'primary'
})

// => 'has-text-color-primary
```

### `textSize`

`string | string[]` - adds "is-size-" to the front of the string

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

### `textWeight`

`string` - adds "has-text-weight" to the front of the string

```javascript
bulma({
  textWeight: 'bold'
})

// => 'has-text-weight-bold'

```

### `textTransformation`

`string | string[]` - adds "is-" to the front of the string

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

### `textAlign`

` string | string[]``` - adds "has-text-" to the front of the string

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

### `is`

`string | string[]` - adds "is-" to the front of each string. Designed as an escape hatch, or for misc. helpers like `is-marginless`

```javascript

bulma({
  is: 'marginless'
})

// => 'is-marginless'

bulma({
  is: ['marginless', 'pulled-left']
})

// => 'is-marginless is-pulled-left'
```

### `has`

`string | string[]` - adds "has-" to the front of each string. Designed as an escape hatch, or for misc. helpers like `has-addons`

```javascript
bulma({
  has: 'addons'
})

// => 'has-text-weight-bold'

bulma({
  has: ['addons', 'addons-right']
})

// => 'has-addons has-addons-right'
```

### `raw`

`string` - outputs the exact same string that is passed, no formatting is added. Useful to pass extra classnames that either don't start with `is` or `has` o aren't related to Bulma in the same object

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

<summary>Are there Flow and TypeScript types available?</summary>

Not yet, but I'm working on them and expect to have them finished soon. You can [see my progress](https://github.com/seanWLawrence/bulma-classnames/blob/master/src/types.js) and contribute if you like!

</details>

<details>

<summary>What is Bulma.css?</summary>

[Bulma.css](https://bulma.io "Bulma.css home") is a beautiful stylesheet with helpers and components already pre-designed for you, like Bootstrap or Foundation. It uses classnames to reference the styles and is great for developers new to styling websites, or anyone that wants to use a battle-tested stylesheet to get going fast on a project. I used it heavily in my other project [Sushi Commerce](https://sushi-commerce.netlify.com "Sushi Commerce static e-commerce website generator") and it drove me to create this package to save hours of time and make my code much prettier to look at and reason about.

</details>

<details>

<summary>What if I hate CSS-in-JS?</summary>

Then this might still be great for you, because you're still doing the same thing as standard CSS - add classnames to an HTML object. But you're doing it more declaratively and modern. t still might feel weird putting your styles in an object at first though, and that's ok.

</details>

## Guiding Principles

> Long classname strings suck to write and suck to look at - JavaScript objects are much easier.

I think it's much more fun to write a declarative object in a small function to write my styles, while using the amazing Bulma.css stylesheet.

This package is a single function that formats the object with a class that has several [switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) and [reducer functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## Roadmap

- Flow and TypeScript typings

## Contributors

[Sean W. Lawrence](https://swl.netlify.com)

## Issues

Looking to contribute? Check out our [roadmap](#roadmap) and [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) on what you'd like to help with!

### Bugs

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) for bugs, missing documentation, or unexpected behavior.

## Feature Requests

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

## Questions

Please [raise an issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) if you have any questions about how to use this package.

## Contributing

Contributions are welcome! If you'd like to help out, check the [issues](https://github.com/seanwlawrence/bulma-classnames/issues/) or [create a new issue](https://github.com/seanwlawrence/bulma-classnames/issues/new) and let us know what you plan to work on. When you're ready to start, visit out instructions on [how to contribute](https://github.com/seanWLawrence/bulma-classnames/blob/master/CONTRIBUTING.md) for more information.

## Changelog

View the [changelog](https://github.com/seanWLawrence/bulma-classnames/blob/master/CHANGELOG.md) to see all updates, which will be automatically updated by `commitizen` and `semantic-release`.

## LICENSE

MIT

<!-- prettier-ignore-end -->

<img height="80" alt="Made for bulma logo" src="https://raw.githubusercontent.com/seanwlawrence/bulma-classnames/master/assets/made_for_bulma.png" />