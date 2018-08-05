import bulma from './index.js';

// object with only single string values
const testStringValues = {
  is: 'clearfix',
  has: 'text-white',
  backgroundColor: 'primary',
  textColor: 'primary',
  textSize: '7',
  textWeight: 'bold',
  textTransformation: 'uppercase',
  textAlign: 'left',
  color: 'primary',
  column: '11-mobile',
  offset: '1-mobile',
  flex: 'mobile',
  inlineFlex: 'mobile',
  block: 'mobile',
  inlineBlock: 'mobile',
  inline: 'mobile',
  image: 'half',
  raw: 'is-primary',
};

// object with only array values
const testArrayValues = {
  is: ['clearfix', 'marginless'],
  has: ['text-white', 'background-white'],
  column: ['11-mobile', '10-tablet', '9-desktop'],
  offset: ['11-mobile', '10-tablet', '9-desktop'],
  flex: ['mobile', 'tablet', 'desktop'],
  inlineFlex: ['mobile', 'tablet', 'desktop'],
  block: ['mobile', 'tablet', 'desktop'],
  inlineBlock: ['mobile', 'tablet', 'desktop'],
  inline: ['mobile', 'tablet', 'desktop'],
};

// object with array values, where only a string should be passed
const testStringOnlyValues = {
  backgroundColor: ['primary', 'link'],
  textColor: ['primary', 'link'],
  textSize: ['7', '5'],
  textWeight: ['bold', 'semibold'],
  textTransformation: ['uppercase', 'lowercase'],
  textAlign: ['left', 'right'],
  color: ['primary', 'link'],
  image: ['half', 'two-thirds'],
  raw: ['is-primary', 'is-link'],
};

test('formats a string value', () => {
  const result = bulma(testStringValues);

  expect(result).toBe(
    'is-clearfix has-text-white has-background-primary has-text-primary is-size-7 has-text-weight-bold is-uppercase has-text-left is-color-primary column is-11-mobile is-offset-1-mobile is-flex-mobile is-inline-flex-mobile is-block-mobile is-inline-block-mobile is-inline-mobile image is-half is-primary',
  );
});

test('formats an array value', () => {
  const result = bulma(testArrayValues);

  expect(result).toBe(
    'is-clearfix is-marginless has-text-white has-background-white column is-11-mobile is-10-tablet is-9-desktop is-offset-11-mobile is-offset-10-tablet is-offset-9-desktop is-flex-mobile is-flex-tablet is-flex-desktop is-inline-flex-mobile is-inline-flex-tablet is-inline-flex-desktop is-block-mobile is-block-tablet is-block-desktop is-inline-block-mobile is-inline-block-tablet is-inline-block-desktop is-inline-mobile is-inline-tablet is-inline-desktop',
  );
});

test('returns empty string on keys that don\'t accept array values', () => {
  const result = bulma(testStringOnlyValues);
  expect(result).toBe('');
});

test('returns empty string on empty objects', () => {
  const result = bulma({});
  expect(result).toBe('');
});

test('returns empty string on wrong keys', () => {
  const result = bulma({ yo: 'yo' });
  expect(result).toBe('');
});

test('returns empty string on a value that is not a string or array of strings', () => {
  const resultWithObjectValue = bulma({ yo: {} });
  const resultWithArrayOfNumbersValue = bulma({ yo: [1, 2, 3] });
  const resultWithArrayOfObjectsValue = bulma({ yo: [{}, {}] });

  expect(resultWithObjectValue).toBe('');
  expect(resultWithArrayOfNumbersValue).toBe('');
  expect(resultWithArrayOfObjectsValue).toBe('');
});

test('formats string properly with a single key:value pair', () => {
  const result = bulma({ is: 'color-primary' });

  expect(result).toBe('is-color-primary');
});

test('formats string properly with a more than one key:value pair', () => {
  const result = bulma({ is: 'color-primary', has: 'text-white' });

  expect(result).toBe('is-color-primary has-text-white');
});
