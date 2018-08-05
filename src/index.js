// @flow
import type { Classnames, Entry } from './types';

// class with all formatting methods
class BulmaClassname {
  // object with keys and values from the API
  classnames: Classnames;

  // initialize contructor
  constructor(classnames: Classnames) {
    this.classnames = classnames;
  }

  // formats single string values
  formatString(selector: string, value: string = ''): string {
    // check to see if the key (selector) matches the API, if so, return the formatted string, if not, return an empty string
    switch (selector) {
      case 'backgroundColor':
        return `has-background-${value}`;
      case 'textColor':
        return `has-text-${value}`;
      case 'textSize':
        return `is-size-${value}`;
      case 'textWeight':
        return `has-text-weight-${value}`;
      case 'textTransformation':
        return `is-${value}`;
      case 'textAlign':
        return `has-text-${value}`;
      case 'color':
        return `is-color-${value}`;
      case 'flex':
        return `is-flex-${value}`;
      case 'inlineFlex':
        return `is-inline-flex-${value}`;
      case 'block':
        return `is-block-${value}`;
      case 'inlineBlock':
        return `is-inline-block-${value}`;
      case 'inline':
        return `is-inline-${value}`;
      case 'column':
        return `column is-${value}`;
      case 'offset':
        return `is-offset-${value}`;
      case 'image':
        return `image is-${value}`;
      case 'is':
        return `is-${value}`;
      case 'has':
        return `has-${value}`;
      case 'raw':
        return value;
      default:
        // returns an empty string if key does not match the API
        return '';
    }
  }

  // formats array values
  formatArray(selector: string, value: string[]): string {
    // adds a prefix to each item in the array
    let addPrefixToAllValues = (prefix: string): string => {
      return value.reduce((acc: string, next: string) => {
        // reduces the array into a single string with the prefix added to the front of each work
        return acc.concat(` ${prefix}-${next}`).trim();
      }, '');
    };

    // check to see if the key (selector) matches the API, if so, return the formatted string, if not, return an empty string
    switch (selector) {
      case 'column':
        return `column ${addPrefixToAllValues('is')}`;
      case 'offset':
        return addPrefixToAllValues('is-offset');
      case 'flex':
        return addPrefixToAllValues('is-flex');
      case 'inlineFlex':
        return addPrefixToAllValues('is-inline-flex');
      case 'block':
        return addPrefixToAllValues('is-block');
      case 'inlineBlock':
        return addPrefixToAllValues('is-inline-block');
      case 'inline':
        return addPrefixToAllValues('is-inline');
      case 'is':
        return addPrefixToAllValues('is');
      case 'has':
        return addPrefixToAllValues('has');
      default:
        // returns an empty string if key does not match the API
        return '';
    }
  }

  // controls whether the formatString or formatARray method should be called based on the value
  formatClassname(selector: string, value: string | string[] = ''): string {
    // if value is a string, pass it into the formatString method
    if (typeof value === 'string') {
      return this.formatString(selector, value);
    }
    // if value is an array of only strings, pass it into the formatArray method
    else if (
      Array.isArray(value) &&
      value.map((entry) => typeof entry === 'string')
    ) {
      return this.formatArray(selector, value);
    }
    // if value if neither of the above, return an empty string
    return '';
  }

  // applies the formatClassname method to all of the entries passed in to the classnames object
  main(): string {
    // imperative version of Object.entries to pass type checks with Flow
    let result = Object.keys(this.classnames)
      .map((key) => {
        return [key, this.classnames[key]];
      })
      // run each key:value pair into the formatClassname ethod
      .map((entry) => {
        // destructure the key (selector) and value (value) to pass into formatClassname
        const [selector: string, value: Entry] = entry;

        // return formattedClassName
        return this.formatClassname(selector, value);
      });

    // if there is at least one key:value pair passed, then reduce all values into a single string
    if (Object.keys(this.classnames).length !== 0) {
      result = result.reduce((acc, next) => {
        return acc.concat(` ${next}`).trim();
      });
    }

    // check that result is a non-empty string, and return it if so or an empty string if not
    return typeof result === 'string' && result.length > 1 ? result : '';
  }

  // run the main method as a getter
  get result(): string {
    return this.main();
  }
}

// pass in the object of classnames and export the formatted string
const bulma = (classnames: Classnames): string =>
  new BulmaClassname(classnames).result;

// default export so it can be imported like `import bulma from 'bulma-classnames'`
export default bulma;
