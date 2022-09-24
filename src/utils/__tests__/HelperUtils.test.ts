import { apiService, getDiscount, truncateString } from '../HelperUtils';
import { mockResource } from '../tests';

describe('Helpers', () => {
  const OLD_ENV = process.env;
  const env = {
    SHOP_URL: 'test',
  };

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, ...env };
  });

  it('#apiService should return base url', () => {
    expect(apiService()).toEqual(env.SHOP_URL);
  });

  it('#truncateString should return capitalized string', () => {
    const words =
      'hello I am more than twenty words one two ' +
      'three four five six seven eight nine ten one two ' +
      'three four five six seven eight nine ten';
    const expectation =
      'hello I am more than twenty words one two ' +
      'three four five six seven eight nine ten one two three';
    expect(truncateString(words)).toEqual(expectation);
  });

  it('#getDiscount should return discount', () => {
    expect(
      getDiscount(mockResource().prodWithDiscount, mockResource().discounts)
    ).toEqual(mockResource().discounts[0]);
    expect(
      getDiscount(mockResource().prodWithoutDiscount, mockResource().discounts)
    ).toBeUndefined();
  });
});
