import { getName } from './getName';


describe('getName', () => {
  it('returns name property from spot object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });
});
