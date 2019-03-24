import { solution } from './OddOccurrencesInArray';

test('[9, 3, 9, 3, 9, 7, 9]', () => {
  expect(solution([9, 3, 9, 3, 9, 7, 9])).toEqual(7);
});

test('[9, 3, 9, 3, 9, 7, 9, 7, 5]', () => {
  expect(solution([9, 3, 9, 3, 9, 7, 9, 7, 5])).toEqual(5);
});

test('[5, 9, 3, 9, 3, 9, 5, 7, 9, 7, 5]', () => {
  expect(solution([5, 9, 3, 9, 3, 9, 5, 7, 9, 7, 5])).toEqual(5);
});
