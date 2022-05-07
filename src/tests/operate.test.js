import operate from '../logic/operate';

describe('Testing operate funtion', () => {
  test('Test operate Logic (Addition) | operate(6, 9, +)', () => {
    expect(operate(6, 9, '+')).toEqual('15');
  });

  test('Test operate Logic (Subtract) | operate(5, 2, -)', () => {
    expect(operate(5, 2, '-')).toEqual('3');
  });

  test('Test operate Logic (Multiply) | operate(5, 2, x)', () => {
    expect(operate(4, 8, 'x')).toEqual('32');
  });

  test('Test operate Logic (Divide) | operate(10, 5, ÷)', () => {
    expect(operate(10, 5, '÷')).toEqual('2');
  });

  test('Test operate Logic (Modulo) | operate(9, 5, %)', () => {
    expect(operate(9, 5, '%')).toEqual('4');
  });
});
