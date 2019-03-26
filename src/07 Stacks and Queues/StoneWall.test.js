import { solution } from './StoneWall';

test('[8, 8, 5, 7, 9, 8, 7, 4, 8]', () => {
  expect(solution([8, 8, 5, 7, 9, 8, 7, 4, 8])).toEqual(7);
});

test('[1, 1, 1, 2, 2, 2, 1, 1, 1]', () => {
  expect(solution([1, 1, 1, 2, 2, 2, 1, 1, 1])).toEqual(2);
});

test('[1, 1, 1, 2, 7, 2, 3, 3, 5]', () => {
  expect(solution([1, 1, 1, 2, 7, 2, 3, 3, 5])).toEqual(5);
});
