test('there is pool in Liverpool', () => {
    expect('liverpool').toMatch(/pool/);
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  const carStock = [
    'BMW',
    'Mercedes',
    'Ferrari',
    'Toyota',
];

test('that the car stock list has a Ferrari',() => {
  expect(carStock).toContain('Ferrari');
});
