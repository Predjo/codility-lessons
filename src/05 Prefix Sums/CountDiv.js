export function solution(A, B, K) {
  if (B === 0) {
    return 1;
  }

  if (K > B) {
    return 0;
  }

  return Math.floor(B / K) - Math.floor(A / K) + (A % K === 0 ? 1 : 0);
}
