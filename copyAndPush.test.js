import { copyAndPush } from './copyAndPush';


describe('copyAndPush', () => {
  it('returns a copy of the array with new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);

    expect(actual).toEqual(expected);
  });
});
