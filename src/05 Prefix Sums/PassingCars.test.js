import { solution } from './PassingCars';

test('[0]', () => {
  expect(solution([0])).toEqual(0);
});

test('[0, 1, 0, 1, 1]', () => {
  expect(solution([0, 1, 0, 1, 1])).toEqual(5);
});

test('[0, 1, 0, 1, 1, 1, 1, 1]', () => {
  expect(solution([0, 1, 0, 1, 1, 1, 1, 1])).toEqual(11);
});

test('[0, 0, 0, 0, 0]', () => {
  expect(solution([0, 0, 0, 0, 0])).toEqual(0);
});

test('[1, 1, 1, 1, 1]', () => {
  expect(solution([1, 1, 1, 1, 1])).toEqual(0);
});

test('[1, 1, 1, 1, 1, 0, 0, 0, 0, 0]', () => {
  expect(solution([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])).toEqual(0);
});
