// @flow

/**
 * Enums for possible key:value pairs that are accepted in the API
 **/

export type Classnames = {
	is?: string | string[],
	has?: string | string[],
	backgroundColor?: string,
	textColor?: string,
	textSize?: string | string[],
	textWeight?: string,
	textTransformation?: string,
	textAlign?: string,
	color?: string,
	columns?: string | string[],
	column?: string | string[],
	offset?: string | string[],
	flex?: string | string[],
	inlineFlex?: string | string[],
	block?: string | string[],
	inlineBlock?: string | string[],
	inline?: string | string[],
	image?: string | string[],
	raw?: string,
};

/**
 * Type for Object.entries() output with array values, for example:
 *
 * bc({
 *	is: ['clearfix', 'marginless']
 * })
 *
 * has a key of "is"
 * and a value of ['clearfix', 'marginless']
 * and when Object.entries({is: ['clearfix', 'marginless']}) is run
 * the output will be [is, ['clearfix', 'marginless']]
 *
 **/
export type Entry = [string, string] | [string, string[]];
