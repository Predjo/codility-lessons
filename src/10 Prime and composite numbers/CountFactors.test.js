import { solution } from './CountFactors';

test('1', () => {
  expect(solution(1)).toEqual(1);
});

test('4', () => {
  expect(solution(4)).toEqual(3);
});

test('24', () => {
  expect(solution(24)).toEqual(8);
});
