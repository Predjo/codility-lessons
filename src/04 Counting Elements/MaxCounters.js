export function solution(N, A) {
  let countA = Array(N).fill(0);
  let maxVal = 0;
  let minVal = 0;

  A.forEach(n => {
    if (n === N + 1) {
      minVal = maxVal;
    } else {
      countA[n - 1] = countA[n - 1] < minVal ? minVal + 1 : countA[n - 1] + 1;
      if (countA[n - 1] > maxVal) {
        maxVal = countA[n - 1];
      }
    }
  });

  return countA.map(n => (n = Math.max(n, minVal)));
}
