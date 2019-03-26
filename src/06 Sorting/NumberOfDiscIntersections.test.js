import { solution } from './NumberOfDiscIntersections';

test('[1, 5, 2, 1, 4, 0]', () => {
  expect(solution([1, 5, 2, 1, 4, 0])).toEqual(11);
});

test('[1, 1, 1]', () => {
  expect(solution([1, 1, 1])).toEqual(3);
});
