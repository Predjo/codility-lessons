import { solution } from './PermMissingElem';

test('[]', () => {
  expect(solution([])).toEqual(1);
});

test('[2]', () => {
  expect(solution([2])).toEqual(1);
});

test('[1, 2]', () => {
  expect(solution([1, 2])).toEqual(3);
});

test('[3, 1]', () => {
  expect(solution([3, 1])).toEqual(2);
});

test('[2, 3, 1, 5]', () => {
  expect(solution([2, 3, 1, 5])).toEqual(4);
});

test('[2, 3, 1, 5, 4, 6, 8, 9, 10, 11]', () => {
  expect(solution([2, 3, 1, 5, 4, 6, 8, 9, 10, 11])).toEqual(7);
});
