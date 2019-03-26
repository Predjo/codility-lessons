import { solution } from './Dominator';

test('[3, 4, 3, 2, 3, -1, 3, 3] ', () => {
  expect(solution([3, 4, 3, 2, 3, -1, 3, 3])).toEqual(7);
});

test('[2, 2, 2, 2, 3, 3, 3] ', () => {
  expect(solution([2, 2, 2, 2, 3, 3, 3])).toEqual(3);
});

test('[2, 2, 2, 2, 3, 3, 3, 3] ', () => {
  expect(solution([2, 2, 2, 2, 3, 3, 3, 3])).toEqual(-1);
});

test('[1] ', () => {
  expect(solution([1])).toEqual(0);
});

test('[] ', () => {
  expect(solution([])).toEqual(-1);
});

test('[2, 1, 1, 3, 4]', () => {
  expect(solution([2, 1, 1, 3, 4])).toEqual(-1);
});
