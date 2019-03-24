export function solution(A) {
  let f = false;

  return A.sort().find((n, i, a) => {
    f = !f;
    return n !== a[i + 1] && f;
  });
}
