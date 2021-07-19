import { copyAndPush } from './copyAndPush';

const numbers = [1, 2, 3];

describe('copyAndPush', () => {
  it('returns a copy of the array with 4 pushed to the end', () => {
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);

    expect(actual).toEqual(expected);
    expect(numbers).not.toEqual(expected);
  });

  it('returns a copy of the array with 5 pushed to the end', () => {
    const expected = [1, 2, 3, 5];
    const actual = copyAndPush(numbers, 5);

    expect(actual).toEqual(expected);
    expect(numbers).not.toEqual(expected);
  });
});
