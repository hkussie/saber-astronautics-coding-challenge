const hashData = require('../../src/utils/hashData');

describe('hashData', () => {
  it('should return a hashed version of the input string', () => {
    const input = 'test';
    const hashed = hashData(input);
    expect(hashed).toBeDefined();
    expect(hashed).not.toBe(input);
  });

  it('should return consistent results for the same input', () => {
    const input = 'consistent';
    const hash1 = hashData(input);
    const hash2 = hashData(input);
    expect(hash1).toBe(hash2);
  });

  it('should handle empty input gracefully', () => {
    const input = '';
    const hashed = hashData(input);
    expect(hashed).toBeDefined();
  });
});