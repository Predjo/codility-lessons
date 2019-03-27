export function solution(A) {
  let N = A.length;
  let maxSlice = 0;

  let left = Array(N).fill(0);
  let right = Array(N).fill(0);

  for (let i = 1; i < N - 1; i++) {
    // max(x, 0) because empty slice (X, Y, Z) == (Y - 1, Y, Y + 1) == 0
    left[i] = Math.max(left[i - 1] + A[i], 0);
    right[N - 1 - i] = Math.max(right[N - i] + A[N - 1 - i], 0);
  }

  for (let i = 1; i < N - 1; i++) {
    maxSlice = Math.max(maxSlice, left[i - 1] + right[i + 1]);
  }

  return maxSlice;
}
