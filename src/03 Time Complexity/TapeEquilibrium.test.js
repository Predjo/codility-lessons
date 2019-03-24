import { solution } from './TapeEquilibrium';

test('[3, 1, 2, 4, 3]', () => {
  expect(solution([3, 1, 2, 4, 3])).toEqual(1);
});

test('[1, 5]', () => {
  expect(solution([1, 5])).toEqual(4);
});

test('[5, 3]', () => {
  expect(solution([5, 3])).toEqual(2);
});

test('[-1000, 1000]', () => {
  expect(solution([-1000, 1000])).toEqual(2000);
});

test('[1, 3, 2, 5, 4, 5, 4, 3, 2, 1]', () => {
  expect(solution([1, 3, 2, 5, 4, 5, 4, 3, 2, 1])).toEqual(0);
});
