// Math problem
// A slice will never be longer than 3 items, as any slice longer will contain
// a slice of 2 or 3 items which has a lower average.

function prefixSums(A) {
  const P = Array(A.length);

  A.forEach((n, i) => {
    P[i] = A[i] + (P[i - 1] || 0);
  });

  return P;
}

function sliceAverage(sumA, P, Q) {
  return (sumA[Q] - (sumA[P - 1] || 0)) / (Q - P + 1);
}

export function solution(A) {
  const N = A.length;
  let P = 0;
  let min = Infinity;

  const sumA = prefixSums(A);

  for (let i = 0; i < N - 1; i++) {
    let twoItemSlice = sliceAverage(sumA, i, i + 1);
    let threeItemSlice = sliceAverage(sumA, i, Math.min(i + 2, N - 1));
    let newMin = Math.min(twoItemSlice, threeItemSlice);

    if (newMin < min) {
      P = i;
      min = newMin;
    }
  }

  return P;
}
