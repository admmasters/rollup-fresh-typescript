import { isEven } from '../isEven';

describe('isEven', () => {
  it('should be able to tell if a number is even', () => {
    const actual = isEven(10);
    expect(actual).toBe(true);
  });
});
