import { solution } from './PermCheck';

test('[1]', () => {
  expect(solution([1])).toEqual(1);
});

test('[2]', () => {
  expect(solution([2])).toEqual(0);
});

test('[4, 1, 3, 2]', () => {
  expect(solution([4, 1, 3, 2])).toEqual(1);
});

test('[4, 1, 3]', () => {
  expect(solution([4, 1, 3])).toEqual(0);
});

test('[4, 1, 3, 5, 2, 7]', () => {
  expect(solution([4, 1, 3, 5, 2, 7])).toEqual(0);
});

test('[4, 1, 3, 5, 2, 7, 6]', () => {
  expect(solution([4, 1, 3, 5, 2, 7, 6])).toEqual(1);
});

test('[4, 1, 3, 5, 2, 7, 6, 6]', () => {
  expect(solution([4, 1, 3, 5, 2, 7, 6, 6])).toEqual(0);
});
