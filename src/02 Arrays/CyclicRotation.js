export function solution(A, K) {
  const N = A.length;
  const num = N - (K % N);

  return [...A.slice(num), ...A.slice(0, num)];
}
