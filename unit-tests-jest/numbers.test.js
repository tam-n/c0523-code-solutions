import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns value in dollars', () => {
    expect(toDollars(12)).toBe('$12.00');
    expect(toDollars(12.8895)).toBe('$12.89');
    expect(toDollars(0)).toBe('$0.00');
  });
});

describe('divideBy', () => {
  it('returns new array of numbers', () => {
    const numbers = [-1, 0, 1, 2, 3, 4];
    expect(divideBy(numbers, 1)).toEqual([-1, 0, 1, 2, 3, 4]);
    expect(divideBy(numbers, 0)).toEqual([
      -Infinity,
      NaN,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
    ]);
    expect(divideBy(numbers, -1)).toEqual([1, 0, -1, -2, -3, -4]);
    expect(divideBy(numbers, 2)).toEqual([-0.5, 0, 0.5, 1, 1.5, 2]);
  });
});

describe('divideBy', () => {
  it('returns new array of numbers', () => {
    const numbers = [-1, 0, 1, 2, 3, 4];
    expect(divideBy(numbers, 1)).toEqual([-1, 0, 1, 2, 3, 4]);
    expect(divideBy(numbers, 0)).toEqual([
      -Infinity,
      NaN,
      Infinity,
      Infinity,
      Infinity,
      Infinity,
    ]);
    expect(divideBy(numbers, -1)).toEqual([1, 0, -1, -2, -3, -4]);
    expect(divideBy(numbers, 2)).toEqual([-0.5, 0, 0.5, 1, 1.5, 2]);
  });
});

describe('multiplyBy', () => {
  it('returns object', () => {
    const obj = {
      first: 1,
      second: 2,
      third: 'Hello, World',
      fourth: 0,
      fifth: -1,
    };
    expect(multiplyBy(obj, 1)).toEqual({
      first: 1,
      second: 2,
      third: 'Hello, World',
      fourth: 0,
      fifth: -1,
    });
  });
});
