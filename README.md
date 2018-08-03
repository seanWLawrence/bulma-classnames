### The problem

Bulma is very modular and powerful css framework, similar to [Bootstrap](http://getbootstrap.com/), [Foundation](https://foundation.zurb.com/), etc. One of the issues I have when using a framework like this, is the extremely long, spaghetti code-looking classnames that you have to use to create a custom component. 

> Note: these examples are using JSX, a syntax usually used with [React.js](https://reactjs.org/), though **Bulma Classnames can be used anywhere that you're able to pass in JavaScript. **

#### Simple example using Bulma.css *without this package*

A simple button with a few style modifiers.

``` javascript
<a 
  href="/" 
  className="button is-primary is-rounded is-outlined is-inverted"
>
  Click me!
</a>
```

#### Nested example with Bulma.css *without this package*

A column with different sizes for different screensizes that wrapps two buttons with some style modifiers. *Note: this is only one level of nesting deep - imagine how jumbled this will look in a real application.*

``` javascript
<div 
  className="column is-1-mobile is-2-tablet is-3-touch is-4-desktop is-5-widescreen is-6-fullhd"
>
  <a 
    href="/" 
    className="button is-primary is-rounded is-outlined"
  >
    Click me!
  </a>
  <a 
    href="/" 
    className="button is-danger outlined is-inverted"
  >
    Cancel
  </a>
</div>
```

### The solution

Bulma Classnames is a simple helper function that allows you to create classnames for bulma with [an object as the functions parameter](/blog/using-javascript-objects-as-function-parameters) is a declaritive API. 

#### Simple example with Bulma Classnames

```javascript
import bulma from 'bulma-classnames'

<a 
  href="/" 
  className={
    bulma({
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
import bulma from 'bulma-classnames'

<div 
  className={
    bulma({
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
      bulma({
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
      bulma({
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
> The API will have more options in the future, along with more types for Flow and Typescript, but below are the current parameters that can be passed into Bulma Classnames helper function:

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

**backgroundColor:** ```string``` - adds "is-background-color-" to the front of the string
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

**hidden:** ```string | string[]``` - adds "is-dden" to the front of each string
```javascript
bulma({
  hidden: 'mobile'
}) 
// => 'is-hidden-mobile'

bulma({
  hidden: [ 'mobile', 'desktop', 'widescreen']
}) 
// => 'is-hidden-mobile is-hidden-desktop is-hidden-widescreen'
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

## Roadmap

- All possible types for Flow and Typescript
- More examples and documentation

## Author

[Sean W. Lawrence](https://swl.netlfy.com)

## Contributions 

Contributions are welcome! Submit an issue if you have any suggestions that you'd like to help with and feedback!

### License
MIT