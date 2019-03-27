import { solution } from './MinPerimeterRectangle';

test('1', () => {
  expect(solution(1)).toEqual(4);
});

test('30', () => {
  expect(solution(30)).toEqual(22);
});

test('50', () => {
  expect(solution(50)).toEqual(30);
});
