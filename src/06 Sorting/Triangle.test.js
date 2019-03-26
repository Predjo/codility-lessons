import { solution } from './Triangle';

test('[10, 2, 5, 1, 8, 20]', () => {
  expect(solution([10, 2, 5, 1, 8, 20])).toEqual(1);
});

test('[10, 50, 5, 1]', () => {
  expect(solution([10, 50, 5, 1])).toEqual(0);
});
