import { solution } from './MaxSliceSum';

test('[4]', () => {
  expect(solution([4])).toEqual(4);
});

test('[-10]', () => {
  expect(solution([-10])).toEqual(-10);
});

test('[-10, -10]', () => {
  expect(solution([-10, -10])).toEqual(-10);
});

test('[-2, 1]', () => {
  expect(solution([-2, 1])).toEqual(1);
});

test('[3, 2, -6, 4, 0]', () => {
  expect(solution([3, 2, -6, 4, 0])).toEqual(5);
});
