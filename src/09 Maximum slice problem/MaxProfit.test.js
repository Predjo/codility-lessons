import { solution } from './MaxProfit';

test('[23171, 21011, 21123, 21366, 21013, 21367]', () => {
  expect(solution([23171, 21011, 21123, 21366, 21013, 21367])).toEqual(356);
});

test('[]', () => {
  expect(solution([])).toEqual(0);
});

test('[23171]', () => {
  expect(solution([23171])).toEqual(0);
});

test('[5, 4, 3, 2, 1]', () => {
  expect(solution([5, 4, 3, 2, 1])).toEqual(0);
});
