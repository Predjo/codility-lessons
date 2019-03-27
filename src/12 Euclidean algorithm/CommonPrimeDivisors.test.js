import { solution } from './CommonPrimeDivisors';

test('([15, 10, 9], [75, 30, 5])', () => {
  expect(solution([15, 10, 9], [75, 30, 5])).toEqual(1);
});

test('([15, 6, 2], [75, 4, 16])', () => {
  expect(solution([15, 6, 2], [75, 4, 16])).toEqual(2);
});
