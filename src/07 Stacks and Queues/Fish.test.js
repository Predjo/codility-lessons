import { solution } from './Fish';

test('([4, 3], [1, 0])', () => {
  expect(solution([4, 3], [1, 0])).toEqual(1);
});

test('([4, 3], [0, 1])', () => {
  expect(solution([4, 3], [0, 1])).toEqual(2);
});

test('([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) ', () => {
  expect(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])).toEqual(2);
});

test('([6, 3, 2, 1, 5], [1, 0, 0, 0, 0])', () => {
  expect(solution([6, 3, 2, 1, 5], [1, 0, 0, 0, 0])).toEqual(1);
});

test('([6, 3, 2, 1, 7], [1, 0, 0, 0, 0])', () => {
  expect(solution([6, 3, 2, 1, 5], [1, 0, 0, 0, 0])).toEqual(1);
});
