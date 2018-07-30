const factorial = require('./factorial')
describe('factorial',()=>{
  it('Should calculate the factorial of a number',()=>{
    expect(factorial(3)).toBe(6);
  });

  it('Factorial of a number less then zero not exist',()=>{
    expect(factorial(-10)).toBe(NaN);
  })
});