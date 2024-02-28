const { add } = require('../index');

describe('Add', () => {
  it('should return 2 for 1 + 2', () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
});
