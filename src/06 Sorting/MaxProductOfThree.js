export function solution(A) {
  const N = A.length;
  const S = A.sort((a, b) => a - b);

  return Math.max(S[N - 1] * S[N - 2] * S[N - 3], S[N - 1] * S[0] * S[1]);
}
