export function solution(A) {
  const MAX = 1000000000;
  const N = A.length;

  const P = Array(N).fill(0);
  let lastCount = 0;

  A.reverse().forEach((n, i) => {
    if (n === 1) {
      lastCount++;
      P[i] = 0;
    } else {
      P[i] = lastCount;
    }
  });

  const sum = P.reduce((acc, n) => acc + n, 0);

  return sum > MAX ? -1 : sum;
}
