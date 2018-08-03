// @flow

// Colors
// ----------------------------
type ColorValuesMain =
	| 'primary'
	| 'link'
	| 'info'
	| 'success'
	| 'warning'
	| 'danger';

type ColorValuesSecondary =
	| 'white'
	| 'white-ter'
	| 'white-bis'
	| 'grey-lighter'
	| 'grey-light'
	| 'grey'
	| 'grey-dark'
	| 'grey-darker'
	| 'black'
	| 'black-ter'
	| 'black-bis';

type ButtonColorValues =
	| 'white'
	| 'light'
	| 'dark'
	| 'black'
	| 'text'
	| ColorValuesMain;

	type TextColors = 
		 'text-primary'
		| 'text-link'
		| 'text-info'
		| 'text-success'
		| 'text-warning'
		| 'text-danger';
		| 'text-white'
		| 'text-white-ter'
		| 'text-white-bis'
		| 'text-grey-lighter'
		| 'text-grey-light'
		| 'text-grey'
		| 'text-grey-dark'
		| 'text-grey-darker'
		| 'text-black'
		| 'text-black-ter'
		| 'text-black-bis'

		type TextAlign = 
		|	'centered' 
		| 'justified' 
		| 'left' 
		| 'right'
		|	'centered'
		| 'justified'
		| 'left'
		| 'right'
		|	'centered'
		| 'justified'
		| 'left'
		| 'right'
		|	'centered'
		| 'justified'
		| 'left'
		| 'right'
		|	'centered'
		| 'justified'
		| 'left'
		| 'right'
		|	'centered'
		| 'justified'
		| 'left'
		| 'right'

type ResponsiveTypes =
	 'block'
	| 'flex'
	| 'inline'
	| 'inline-block'
	| 'inline-flex'
	| 'block-mobile'
	| 'block-tablet-only'
	| 'block-desktop-only'
	| 'block-widescreen-only'
	| 'block-touch'
	| 'block-tablet'
	| 'block-desktop'
	| 'block-widescreen'
	| 'block-fullhd'
	| 'inline-block-mobile'
	| 'inline-block-tablet-only'
	| 'inline-block-desktop-only'
	| 'inline-block-widescreen-only'
	| 'inline-block-touch'
	| 'inline-block-tablet'
	| 'inline-block-desktop'
	| 'inline-block-widescreen'
	| 'inline-block-fullhd'
	| 'inline-mobile'
	| 'inline-tablet-only'
	| 'inline-desktop-only'
	| 'inline-widescreen-only'
	| 'inline-touch'
	| 'inline-tablet'
	| 'inline-desktop'
	| 'inline-widescreen'
	| 'inline-fullhd'
	| 'flex-mobile'
	| 'flex-tablet-only'
	| 'flex-desktop-only'
	| 'flex-widescreen-only'
	| 'flex-touch'
	| 'flex-tablet'
	| 'flex-desktop'
	| 'flex-widescreen'
	| 'flex-fullhd'
	| 'inline-flex-mobile'
	| 'inline-flex-tablet-only'
	| 'inline-flex-desktop-only'
	| 'inline-flex-widescreen-only'
	| 'inline-flex-touch'
	| 'inline-flex-tablet'
	| 'inline-flex-desktop'
	| 'inline-flex-widescreen'
	| 'inline-flex-fullhd';

type ResponsiveBreakpoints =
	| 'mobile'
	| 'tablet-only'
	| 'desktop-only'
	| 'widescreen-only'
	| 'touch'
	| 'tablet'
	| 'desktop'
	| 'widescreen'
	| 'fullhd';

type Helpers =
	| 'clearfix'
	| 'pulled-left'
	| 'pulled-right'
	| 'marginless'
	| 'paddingless'
	| 'overlay'
	| 'clipped'
	| 'radiusless'
	| 'shadowless'
	| 'unselectable'
	| 'invisible'
	| 'sr-only';

type HeroModifiers = 'bold' | 'medium' | 'large' | 'fullheight';

type TileModifiers = 'ancestor' | 'parent' | 'child' | 'vertical';

type FormIsModifiers =
	| 'expanded'
	| 'full-width'
	| 'grouped'
	| 'grouped-centered'
	| 'grouped-right'
	| 'grouped-multiline'
	| 'small'
	| 'medium'
	| 'large';

type FormHasModifiers = 'addons' | 'addons-centered' | 'addons-right';

type ButtonIsModifiers =
	| 'left'
	| 'right'
	| 'rounded'
	| 'hovered'
	| 'focused'
	| 'loading'
	| 'static'
	| 'active'
	| 'outlined'
	| 'inverted';

type ButtonHasModifiers = 'icons-left' | 'icons-right';

// Sizes
// -------------------------

type ImageSizes =
	| '16x16'
	| '24x24'
	| '32x32'
	| '48x48'
	| '64x64'
	| '96x96'
	| '128x128'
	| 'square'
	| '1by1'
	| '5by4'
	| '4by3'
	| '3by2'
	| '5by3'
	| '16by9'
	| '2by1'
	| '3by1'
	| '4by5'
	| '3by4'
	| '2by3'
	| '3by5'
	| '9by16'
	| '1by2'
	| '1by3';

type ColumnSizes =
	| 'three-quarters'
	| 'two-thirds'
	| 'two-fifths'
	| 'half'
	| 'one-third'
	| 'one-quarter'
	| 'four-fifths'
	| 'three-fifths'
	| 'two-fifths'
	| 'one-fifth'
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11';

type TextSizes =
	| 'size-1'
	| 'size-2'
	| 'size-3'
	| 'size-4'
	| 'size-5'
	| 'size-6'
	| 'size-7'
	| 'size-1-mobile'
	| 'size-2-mobile'
	| 'size-3-mobile'
	| 'size-4-mobile'
	| 'size-5-mobile'
	| 'size-6-mobile'
	| 'size-7-mobile'
	| 'size-1-tablet'
	| 'size-2-tablet'
	| 'size-3-tablet'
	| 'size-4-tablet'
	| 'size-5-tablet'
	| 'size-6-tablet'
	| 'size-7-tablet'
	| 'size-1-touch'
	| 'size-2-touch'
	| 'size-3-touch'
	| 'size-4-touch'
	| 'size-5-touch'
	| 'size-6-touch'
	| 'size-7-touch'
	| 'size-1-desktop'
	| 'size-2-desktop'
	| 'size-3-desktop'
	| 'size-4-desktop'
	| 'size-5-desktop'
	| 'size-6-desktop'
	| 'size-7-desktop'
	| 'size-1-widescreen'
	| 'size-2-widescreen'
	| 'size-3-widescreen'
	| 'size-4-widescreen'
	| 'size-5-widescreen'
	| 'size-6-widescreen'
	| 'size-7-widescreen'
	| 'size-1-fullhd'
	| 'size-2-fullhd'
	| 'size-3-fullhd'
	| 'size-4-fullhd'
	| 'size-5-fullhd'
	| 'size-6-fullhd'
	| 'size-7-fullhd';

type IsValues =
	| Helpers
	| 'mobile'
	| 'narrow'
	| 'gapless'
	| 'multiline'
	| 'centered'
	| 'delete'
	| 'multiple'
	| 'selected'
	| 'spaced'
	| 'grouped-multiline'
	| 'transparent'
	| 'fixed-top'
	| 'fixed-bottom'
	| 'up'
	| 'hoverable'
	| 'boxed'
	| 'toggle'
	| 'toggle-rounded'
	| TileModifiers
	| HeroModifiers
	| Helpers
	| ResponsiveBreakpoints
	| ResponsiveTypes
	| ButtonIsModifiers
	| FormIsModifiers
	| ColumnSizes
	| ImageSizes
	| ColorValuesMain
	| ColorValuesSecondary
	| ButtonColorValues
	| HeroModifiers
	| TileModifiers;

type HasValues =
	| 'arrow-separator'
	| 'bullet-separator'
	| 'dot-separator'
	| 'dropdown'
	| 'dropdown-up'
	| 'succeeds-separator'
	| FormHasModifiers
	| ButtonHasModifiers;

/**
 * Enums for possible key:value pairs that are accepted in the API
 **/

export type Classnames = {
	is?: IsValues,
	has?: string | string[],
	backgroundColor?: string,
	textColor?: string,
	textSize?: string,
	textWeight?: string,
	textTransformation?: string,
	textAlign?: string,
	color?: string,
	column?: string | string[],
	offset?: string | string[],
	flex?: string | string[],
	inlineFlex?: string | string[],
	block?: string | string[],
	inlineBlock?: string | string[],
	inline?: string | string[],
	image?: string,
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
