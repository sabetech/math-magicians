import calculate from '../logic/calculate';

describe('Testing Calculate function', () => {
  test('Test Calculate Logic Calculate({ total: 3, next: 6, operation: x }, =)', () => {
    const obj = { total: '3', next: '6', operation: 'x' };
    expect(calculate(obj, '=')).toEqual({ total: '18', next: null, operation: null });
  });

  test('Test Calculate Logic Calculate({ total: 5, next: 6, operation: - }, =)', () => {
    const obj = { total: '5', next: '6', operation: '-' };
    expect(calculate(obj, '=')).toEqual({ total: '-1', next: null, operation: null });
  });

  test('Test Calculate Logic Calculate({ total: 7, next: 2, operation: x }, =)', () => {
    const obj = { total: '7', next: '2', operation: 'x' };
    expect(calculate(obj, '=')).toEqual({ total: '14', next: null, operation: null });
  });

  test('Test Calculate Logic Calculate({ total: 10, next: 2, operation: ÷ }, =)', () => {
    const obj = { total: '10', next: '2', operation: '÷' };
    expect(calculate(obj, '=')).toEqual({ total: '5', next: null, operation: null });
  });
});
