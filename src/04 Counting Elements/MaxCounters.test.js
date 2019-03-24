import { solution } from './MaxCounters';

test('(3, [4])', () => {
  expect(solution(3, [4])).toEqual([0, 0, 0]);
});

test('(5, [3, 4, 4, 6, 1, 4, 4])', () => {
  expect(solution(5, [3, 4, 4, 6, 1, 4, 4])).toEqual([3, 2, 2, 4, 2]);
});

test('(3, [1, 2, 1, 2, 1, 2, 3, 4])', () => {
  expect(solution(3, [1, 2, 1, 2, 1, 2, 3, 4])).toEqual([3, 3, 3]);
});

test('(3, [1, 2, 1, 2, 1, 4, 4, 4, 3, 3, 2])', () => {
  expect(solution(3, [1, 2, 1, 2, 1, 4, 4, 4, 3, 3, 2])).toEqual([3, 4, 5]);
});
