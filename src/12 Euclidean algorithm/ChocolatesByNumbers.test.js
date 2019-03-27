import { solution } from './ChocolatesByNumbers';

test('(10, 4)', () => {
  expect(solution(10, 4)).toEqual(5);
});

test('(10, 3)', () => {
  expect(solution(10, 3)).toEqual(10);
});

test('(3, 10)', () => {
  expect(solution(3, 10)).toEqual(3);
});
