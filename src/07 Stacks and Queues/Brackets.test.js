import { solution } from './Brackets';

test('', () => {
  expect(solution('')).toEqual(1);
});

test('{[()()]}', () => {
  expect(solution('{[()()]}')).toEqual(1);
});

test('([)()]', () => {
  expect(solution('([)()]')).toEqual(0);
});

test('(', () => {
  expect(solution('(')).toEqual(0);
});

test('(((((((((())))))))))', () => {
  expect(solution('(((((((((())))))))))')).toEqual(1);
});
