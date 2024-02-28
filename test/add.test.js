const { add } = require('../index');

describe('Add', () => {
  it('should return 2 for 1 + 2', () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
  it('should return 10 for 5 + 5', () => {
    const result = add(5, 5);
    expect(result).toBe(10);
  });
  it('should return 0 for -1 + 1', () => {
    const result = add(-1, 1);
    expect(result).toBe(0);
  });
});
