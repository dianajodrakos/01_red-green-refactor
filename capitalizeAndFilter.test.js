import { capitalizeAndFilter } from './capitalizeAndFilter';

describe('capitalizeAndFilter', () => {
  it('takes an array of strings and returns them capitalized, and any strings starting with \'F\' or \'f\' removed', () => {
    const array = ['one', 'two', 'three', 'four', 'Five'];
    const expected = ['ONE', 'TWO', 'THREE'];
    const actual = capitalizeAndFilter(array);

    expect(actual).toEqual(expected);
  }); 
});
