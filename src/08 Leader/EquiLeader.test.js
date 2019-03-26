import { solution } from './EquiLeader';

test('[4, 3, 4, 4, 4, 2]', () => {
  expect(solution([4, 3, 4, 4, 4, 2])).toEqual(2);
});

test('[4, 4, 2, 5, 3, 4, 4, 4]', () => {
  expect(solution([4, 4, 2, 5, 3, 4, 4, 4])).toEqual(3);
});
