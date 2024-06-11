import { sum } from './sum';

test('Testing sum function', () => {
  const result = sum(2, 4);

  expect(result).toBe(6);
});
