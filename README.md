# Bulma Classnames

Simple utility for creating Bulma.css classnames using JavaScript objects with a declarative API.

## Installation

`yarn add bulma-classnames`

or if you use npm

`npm i bulma-classnames`

and then import it into your JavaScript file if using ES6, etc.

```javascript
import bc from 'bulma-classnames'

<a 
  href="/" 
  className={
    bc({
      raw: 'button',
      is: ['rounded', 'outlined'] 
      color: 'primary'
    })
  }
>
  Click me!
</a>

```

## Examples

> Note: these examples are using JSX, a syntax usually used with [React.js](https://reactjs.org/), though **Bulma Classnames can be used anywhere that you're able to pass in JavaScript. **



#### Simple example

```javascript
import bc from 'bulma-classnames'

<a 
  href="/" 
  className={
    bc({
      raw: 'button',
      is: ['rounded', 'outlined'] 
      color: 'primary'
    })
  }
>
  Click me!
</a>

```

#### Nested example with BulmaClassnames

``` javascript
import bc from 'bulma-classnames'

<div 
  className={
    bc({
      column: [
        '1-mobile',
        '2-tablet',
        '3-touch',
        '4-desktop',
        '5-widescreen',
        '6-fullhd'
      ]
    )}
  }
>
  <a 
    href="/" 
    className={
      bc({
        raw: 'button',
        is: ['rounded', 'outlined'] 
        color: 'primary'
      })
    }
  >
    Click me!
  </a>
   <a 
    href="/" 
    className={
      bc({
        raw: 'button',
        is: ['inverted', 'outlined'] 
        color: 'primary'
      })
    }
  >
    Cancel
  </a>
</div>
```

### API
> The API may have more options in the future, along with more types for Flow and Typescript, but below are the current parameters that can be passed into Bulma Classnames helper function:

**is:** ```string | string[]``` - adds "is-" to the front of each string

```javascript
bc({
  is: 'primary'
}) 
// => 'is-primary'

bc({
  is: ['primary', 'capitalized']
}) 

// => 'is-primary is-capitalized'
```

**has:** ```string | string[]``` - adds "has-" to the front of each string
```javascript
bc({
  has: 'text-weight-bold'
}) 
// => 'has-text-weight-bold'

bc({
  has: ['text-weight-bold', 'text-color-danger']
}) 

// => 'has-text-weight-bold has-text-color-danger'
```
**raw:** ```string``` - outputs the exact same string that is passed, no formatting is added
```javascript
bc({
  raw: 'column'
}) 
// => 'column'
```

**backgroundColor:** ```string``` - adds "is-background-" to the front of the string
```javascript
bc({
  backgroundColor: 'primary'
}) 
// => 'is-background-primary'
```

**color:** ```string``` - adds "is-" to the front of the string
```javascript
bc({
  color: 'primary'
}) 
// => 'is-primary
```

**column:** ```string | string[]``` - adds "is-" to the front of each string and "column" to the end
```javascript
bc({
  column: '10-mobile'
}) 
// => 'is-10-mobile column'

bc({
  column: [ '10-mobile', '11-desktop', '12-widescreen']
}) 
// => 'is-10-mobile is-11-desktop is-12-widescreen column'
```

**offset:** ```string | string[]``` - adds "is-offset-" to the front of each string 
```javascript
bc({
  offset: '10-mobile'
}) 
// => 'is-offset-10-mobile'

bc({
  offset: [ '10-mobile', '11-desktop', '12-widescreen']
}) 
// => 'is-offset-10-mobile is-offset-11-desktop is-offset-12-widescreen'
```

**flex:** ```string | string[]``` - adds "is-flex" to the front of each string
```javascript
bc({
  flex: 'mobile'
}) 
// => 'is-flex-mobile'

bc({
  flex: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-flex-mobile is-flex-desktop is-flex-widescreen'
```

**inlineFlex:** ```string | string[]``` - adds "is-inline-flex" to the front of each string
```javascript
bc({
  inlineFlex: 'mobile'
}) 
// => 'is-inline-flex-mobile'

bc({
  inlineFlex: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-flex-mobile is-inline-flex-desktop is-inline-flex-widescreen'
```

**block:** ```string | string[]``` - adds "is-block" to the front of each string
```javascript
bc({
  block: 'mobile'
}) 
// => 'is-block-mobile'

bc({
  block: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-block-mobile is-block-desktop is-block-widescreen'
```

**inlineBlock:** ```string | string[]``` - adds "is-inline-block" to the front of each string
```javascript
bc({
  inlineBlock: 'mobile'
}) 
// => 'is-inline-block-mobile'

bc({
    inlineBlock: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-block-mobile is-inline-block-desktop is-inline-block-widescreen'
```

**inline:** ```string | string[]``` - adds "is-inline" to the front of each string
```javascript
bc({
  inline: 'mobile'
}) 
// => 'is-inline-mobile'

bc({
  inline: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-inline-mobile is-inline-desktop is-inline-widescreen'
```

**textColor:** ```string``` - adds "has-text-color" to the front of the string
```javascript
bc({
  textColor: 'primary'
}) 
// => 'has-text-color-primary
```

**textSize:** ```string | string[]``` - adds "is-size-" to the front of the string
```javascript
bc({
  textSize: '6'
}) 
// => 'is-size-6'

bc({
  textSize: ['5-mobile', '6-desktop', '7-widescreen']
}) 
// => 'is-size-5-mobile is-size-6-desktop is-size-7-widescreen'
```

**textWeight:** ```string``` - adds "has-text-weight" to the front of the string
```javascript
bc({
  textWeight: 'bold'
}) 
// => 'has-text-weight-bold'

```

**textTransformation:** ``` string | string[]``` - adds "is-" to the front of the string (for better semantics than using ```is:```
```javascript
bc({
  textTransformation: 'capitalized'
}) 
// => 'is-capitalized'

bc({
  textTransformation: ['capitalized', 'italic']
}) 
// => 'is-capitalized is-italic'
```

**textAlign:** ``` string | string[]``` - adds "has-text-" to the front of the string
```javascript
bc({
  textAlign: 'left'
}) 
// => 'has-text-left'

bc({
  textAlign: ['left-mobile', 'right-desktop', 'center-widescreen']
}) 
// => 'has-text-left-mobile has-text-right-desktop has-text-center-widescreen'
```

## Roadmap

- All possible types for Flow and Typescript
- More examples and documentation

## Author

[Sean W. Lawrence](https://swl.netlfy.com)

## Contributions 

Contributions are welcome! [Submit an issue](https://github.com/seanWLawrence/bulma-classnames/issues) if you have any suggestions that you'd like to help with and feedback!

### License
MIT
