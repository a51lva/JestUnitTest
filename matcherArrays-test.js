const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});

test('The shoopping list do not have orange on it',()=>{
  expect(shoppingList).not.toContain('orange');
});
test('',()=>{
  expect(shoppingList).toContain('kleenex');
})
