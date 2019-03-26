export function solution(A) {
  const N = A.length;

  if (N < 3) {
    return 0;
  }

  const S = A.sort((a, b) => a - b);

  for (let i = 0; i < N - 2; i++) {
    if (S[i] + S[i + 1] > S[i + 2]) {
      return 1;
    }
  }

  return 0;
}
