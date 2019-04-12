import { solution } from './CountNonDivisible';

test('[3, 1, 2, 3, 6]', () => {
  expect(solution([3, 1, 2, 3, 6])).toEqual([2, 4, 3, 2, 0]);
});

test('[6, 6, 6, 6, 6]', () => {
  expect(solution([6, 6, 6, 6, 6])).toEqual([0, 0, 0, 0, 0]);
});
