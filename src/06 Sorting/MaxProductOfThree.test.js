import { solution } from './MaxProductOfThree';

test('[1, 3, 1, 4, 2, 3, 5, 4]', () => {
  expect(solution([1, 3, 1, 4, 2, 3, 5, 4])).toEqual(80);
});

test('[2, 1, 1, 2, 3, 1]', () => {
  expect(solution([2, 1, 1, 2, 3, 1])).toEqual(12);
});

test('[-3, 1, 2, -2, 5, 6] ', () => {
  expect(solution([-3, 1, 2, -2, 5, 6])).toEqual(60);
});

test('[-3, 1, 20, -2, 5, 6] ', () => {
  expect(solution([-3, 1, 20, -2, 5, 6])).toEqual(600);
});

test('[-30, 1, 20, -2, 5, 6] ', () => {
  expect(solution([-30, 1, 20, -2, 5, 6])).toEqual(1200);
});
