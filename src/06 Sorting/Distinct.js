export function solution(A) {
  return A.sort().reduce((acc, n, i, a) => acc + (n !== a[i + 1]), 0);
}
