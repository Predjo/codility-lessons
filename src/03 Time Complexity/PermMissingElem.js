export function solution(A) {
  return (
    [0, ...A].sort((a, b) => a - b).find((n, i, a) => n + 1 !== a[i + 1]) + 1
  );
}
