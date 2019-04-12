import { solution } from './CountSemiprimes';

test('(26, [1, 4, 16], [26, 10, 20])', () => {
  expect(solution(26, [1, 4, 16], [26, 10, 20])).toEqual([10, 4, 0]);
});

test('(265, [16], [20])', () => {
  expect(solution(265, [16], [20])).toEqual([0]);
});
