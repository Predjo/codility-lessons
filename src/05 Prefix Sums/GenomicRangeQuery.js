export function solution(S, P, Q) {
  const N = S.length;
  const M = P.length;

  const impactA = [];
  const impactValue = { A: 1, C: 2, G: 3, T: 4 };
  const impactOrder = ['A', 'C', 'G', 'T'];

  const initialCount = { A: 0, C: 0, G: 0, T: 0 };

  const minA = Array(M).fill(impactOrder.T);

  for (let i = 0; i < N; i++) {
    let previous = impactA[i - 1] || initialCount;
    impactA[i] = { ...previous, [S[i]]: previous[S[i]] + 1 };
  }

  for (let i = 0; i < M; i++) {
    const p = P[i] === 0 ? initialCount : impactA[P[i] - 1];
    const q = impactA[Q[i]];

    for (let c of impactOrder) {
      if (q[c] - p[c]) {
        minA[i] = impactValue[c];
        break;
      }
    }
  }

  return minA;
}
