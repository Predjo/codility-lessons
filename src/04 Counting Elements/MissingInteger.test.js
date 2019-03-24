import { solution } from './MissingInteger';

test('[1, 3, 6, 4, 1, 2]', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toEqual(5);
});

test('[1, 2, 3]', () => {
  expect(solution([1, 2, 3])).toEqual(4);
});

test('[-1, -3]', () => {
  expect(solution([-1, -3])).toEqual(1);
});
