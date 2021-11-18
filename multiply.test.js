const multiply = require('./multiply');

describe('test multiple scenarios',() =>{
    test.only('multiply 3*2 should equal to 6',() =>{
        expect(multiply(3,2)).toBe(6);
        expect(multiply(3,2)).toBeGreaterThan(5);
        expect(multiply(3,2)).toBeLessThan(7);
        expect(multiply(3,2)).toBeLessThanOrEqual(6);
    });
})

test('object example', () => {
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
  });

  test('multiply 4*3 should not equal to 11',() =>{
    expect(multiply(4,3)).not.toBe(11);
});

