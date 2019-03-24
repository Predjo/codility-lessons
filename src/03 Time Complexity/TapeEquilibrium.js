export function solution(A) {
  let [left, ...rest] = A;
  let right = rest.reduce((acc, n) => acc + n, 0);
  let min = Math.abs(right - left);

  for (let index = 0; index < rest.length - 1; index++) {
    const n = rest[index];
    left += n;
    right -= n;
    let newMin = Math.abs(right - left);
    if (newMin < min) {
      min = newMin;
    }
  }

  return min;
}
