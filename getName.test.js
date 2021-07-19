import { getName } from './getName';


describe('getName', () => {
  it('returns name property from spot object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });

  it('returns name property from character object', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const expected = 'Aang';
    const actual = getName(character);

    expect(actual).toEqual(expected);
  });
});
