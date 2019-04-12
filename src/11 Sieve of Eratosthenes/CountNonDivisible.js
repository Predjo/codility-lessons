function factorisation(N) {
  const factors = [];
  let i = 1;

  while (i < Math.sqrt(N)) {
    if (N % i === 0) {
      factors.push(i);
      factors.push(N / i);
    }
    i++;
  }

  if (i === Math.sqrt(N)) {
    factors.push(i);
  }

  return factors;
}

export function solution(A) {
  const N = A.length;
  const nonDvisorA = [];
  const countA = new Array(N * 2 + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const n = A[i];
    countA[n]++;
  }

  for (let i = 0; i < N; i++) {
    let count = 0;
    const divisorsA = factorisation(A[i]);
    divisorsA.forEach(f => (count += countA[f]));
    nonDvisorA[i] = N - count;
  }

  return nonDvisorA;
}
