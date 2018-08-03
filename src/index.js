// @flow
import type { Classnames, Entry } from './types';

// holds all formatting methods
class BulmaClassname {
	// key
	selector: string;
	//value
	value: string | string[];

	// initialize contructor
	constructor(selector: string, value: string | string[]) {
		this.selector = selector;
		this.value = value;
	}

	// formats single string values
	formatString(selector: string, value: string): string | void {
		switch (selector) {
			case 'backgroundColor':
				return `has-background-color-${value}`;
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
			case 'columns':
				return `columns ${value}`;
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
				if (process.env.NODE_ENV === 'development') {
					console.warn(
						'An incorrect key was passed to bulmaClassnames. Refer to the API for a list of p' +
							'ossible keys and values.',
					);
				}
		}
	}

	formatArray(selector: string, value: string[]): string | void {
		let addPrefixToAllValues = (prefix: string): string => {
			return value.reduce(
				(acc, next) => acc.concat(` ${prefix}-${next}`).trim(),
				'',
			);
		};

		switch (selector) {
			case 'columns':
				return `columns ${addPrefixToAllValues('is')}`;
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
			case 'inline-block':
				return addPrefixToAllValues('is-inline-block');
			case 'inline':
				return addPrefixToAllValues('is-offset');
			case 'image':
				return `image ${addPrefixToAllValues('is')}`;
			case 'is':
				return addPrefixToAllValues('is');
			case 'has':
				return addPrefixToAllValues('has');
			case 'textSize':
				return addPrefixToAllValues('is-size');
			default:
				if (process.env.NODE_ENV === 'development') {
					console.warn(
						'An incorrect key was passed to bulmaClassnames. Refer to the API for a list of p' +
							'ossible keys and values.',
					);
				}
		}
	}

	formatClassname(selector: string, value: string | string[]): string | void {
		if (typeof value === 'string') {
			return this.formatString(selector, value);
		} else if (
			Array.isArray(value) &&
			value.map((entry) => typeof entry === 'string')
		) {
			return this.formatArray(selector, value);
		} else if (process.env.NODE_ENV === 'development') {
			console.warn(
				'Invalid value has been passed to bulmaClassnames. Values can only be a string or' +
					' and array of strings',
			);
		}
	}

	get value(): string | void {
		return this.formatClassname(this.selector, this.value);
	}
}

const bc = (classNames: Classnames): string | void => {
	if (Object.entries(classNames).length > 0) {
		return Object.entries(classNames)
			.map(
				(entry: Entry): string => {
					const [selector, value] = entry;
					const className = new BulmaClassname(selector, value);
					return className.value;
				},
			)
			.reduce((acc: string, next: string) => {
				return acc.concat(` ${next}`);
			});
	}
};

export default bc;
