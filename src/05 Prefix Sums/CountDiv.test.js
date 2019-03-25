import { solution } from './CountDiv';

test('(6, 11, 2)', () => {
  expect(solution(6, 11, 2)).toEqual(3);
});

test('(1, 37, 3)', () => {
  expect(solution(1, 37, 3)).toEqual(12);
});

test('(5, 5, 5)', () => {
  expect(solution(5, 5, 5)).toEqual(1);
});

test('(5, 5, 3)', () => {
  expect(solution(5, 5, 3)).toEqual(0);
});

test('(5, 5, 6)', () => {
  expect(solution(5, 5, 6)).toEqual(0);
});

test('(11, 13, 2)', () => {
  expect(solution(11, 13, 2)).toEqual(1);
});

test('(0, 0, 11', () => {
  expect(solution(0, 0, 11)).toEqual(1);
});
