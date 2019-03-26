import { solution } from './Distinct';

test('[1, 3, 1, 4, 2, 3, 5, 4]', () => {
  expect(solution([1, 3, 1, 4, 2, 3, 5, 4])).toEqual(5);
});

test('[2, 1, 1, 2, 3, 1]', () => {
  expect(solution([2, 1, 1, 2, 3, 1])).toEqual(3);
});

test('[1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1]', () => {
  expect(solution([1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1])).toEqual(2);
});
