import { solution } from './GenomicRangeQuery';

test('("CAGCCTA", [2, 5, 0], [4, 5, 6])', () => {
  expect(solution('CAGCCTA', [2, 5, 0], [4, 5, 6])).toEqual([2, 4, 1]);
});

test('("TC", [0, 0, 1], [0, 1, 1])', () => {
  expect(solution('TC', [0, 0, 1], [0, 1, 1])).toEqual([4, 2, 2]);
});

test('("C", [0, 0, 0], [0, 0, 0])', () => {
  expect(solution('C', [0, 0, 0], [0, 0, 0])).toEqual([2, 2, 2]);
});
