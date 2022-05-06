import calculate from '../logic/calculate';

test('Test Calculate Logic Calculate({ total: 3, next: 6, operation: x }, =)', () => {
	const obj = { total: '3', next: '6', operation: 'x' };
	expect(calculate(obj, '=')).toEqual({ total: '18', next: null, operation: null });
});
