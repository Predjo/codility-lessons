import { solution } from './MaxDoubleSliceSum';

test('[3, 2, 6, -1, 4, 5, -1, 2]', () => {
  expect(solution([3, 2, 6, -1, 4, 5, -1, 2])).toEqual(17);
});

test('[0, 10, -5, -2, 0]', () => {
  expect(solution([0, 10, -5, -2, 0])).toEqual(10);
});
