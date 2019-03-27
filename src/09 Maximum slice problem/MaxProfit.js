export function solution(A) {
  let N = A.length;

  if (N === 0 || N === 1) {
    return 0;
  }

  let minPrice = A[0];
  let maxPrice = 0;
  let maxCurrentPrice = 0;

  for (let i = 0; i < N; i++) {
    maxCurrentPrice = Math.max(0, A[i] - minPrice);
    minPrice = Math.min(minPrice, A[i]);
    maxPrice = Math.max(maxPrice, maxCurrentPrice);
  }

  return maxPrice;
}
