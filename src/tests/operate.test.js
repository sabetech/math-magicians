import operate from '../logic/operate';

test('Test operate Logic (Addition) | operate(6, 9, +)', () => {
  expect(operate(6, 9, '+')).toEqual('15');
});
