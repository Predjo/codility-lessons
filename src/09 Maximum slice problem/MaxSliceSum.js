// Kadane's algorithm

export function solution(A) {
  let N = A.length;

  let maxSum = A[0];
  let maxCurrentSum = A[0];

  for (let i = 1; i < N; i++) {
    maxCurrentSum = Math.max(A[i], maxCurrentSum + A[i]);
    maxSum = Math.max(maxCurrentSum, maxSum);
  }

  return maxSum;
}
