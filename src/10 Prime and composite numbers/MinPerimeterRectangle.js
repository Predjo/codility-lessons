export function solution(N) {
  let result = 0;
  let i = 1;
  let A = 1;
  let B = 1;

  while (i <= Math.sqrt(N)) {
    if (N % i === 0) {
      A = i;
      B = N / A;
    }
    i++;
  }

  return 2 * (A + B);
}
