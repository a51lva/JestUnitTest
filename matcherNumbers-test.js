
test('Twenty plus eight',()=>{
  const value = 20 + 8;
  expect(value).toBeGreaterThan(23);
  expect(value).toBeGreaterThanOrEqual(23.5);
  expect(value).toBeLessThan(29);
  expect(value).toBeLessThanOrEqual(28.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(28);
  expect(value).toEqual(28);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
  expect(value).toBeLessThanOrEqual(0.34)
});