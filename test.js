const { add } = require('./index');

test('adds 5 + 5 to equal 10', () => {
    expect(add(5, 5)).toBe(10);
});