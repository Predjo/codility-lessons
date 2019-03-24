import { solution } from './FrogRiverOne';

test('(5, [1, 3, 1, 4, 2, 3, 5, 4])', () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toEqual(6);
});

test('(5, [1, 3, 1, 4, 2, 3, 7, 4])', () => {
  expect(solution(5, [1, 3, 1, 4, 2, 3, 7, 4])).toEqual(-1);
});

test('(5, [1, 2, 3, 4])', () => {
  expect(solution(5, [1, 2, 3, 4])).toEqual(-1);
});

test('(5, [1, 2, 3, 4, 5, 4])', () => {
  expect(solution(5, [1, 2, 3, 4, 5, 4])).toEqual(4);
});

test('(7, [1, 2, 3, 5, 4, 3, 2, 1, 2, 1, 2, 1, 8, 7, 6])', () => {
  expect(solution(7, [1, 2, 3, 5, 4, 3, 2, 1, 2, 1, 2, 1, 8, 7, 6])).toEqual(
    14
  );
});
