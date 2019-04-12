function sieve(N) {
  const sieveA = new Array(N + 1).fill(true);
  sieveA[0] = false;
  sieveA[1] = false;

  let i = 2;

  while (i * i <= N) {
    if (sieveA[i]) {
      let k = i * i;
      while (k <= N) {
        sieveA[k] = false;
        k += i;
      }
    }
    i += 1;
  }

  return sieveA;
}

function sieveFactors(N) {
  const sieveA = new Array(N + 1).fill(0);

  let i = 2;

  while (i * i <= N) {
    if (sieveA[i] === 0) {
      let k = i * i;
      while (k <= N) {
        sieveA[k] = i;
        k += i;
      }
    }
    i += 1;
  }

  return sieveA;
}

export function solution(N, P, Q) {
  const M = P.length;
  const semiPrimeCounts = new Array(M).fill(0);

  const sieveA = sieve(N);
  const sieveF = sieveFactors(N);

  const sievePrefixSums = new Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    const isSemiPrime = sieveF[i] !== 0 ? sieveA[i / sieveF[i]] : false;
    sievePrefixSums[i] = sievePrefixSums[i - 1] + Number(isSemiPrime);
  }

  for (let i = 0; i < M; i++) {
    semiPrimeCounts[i] = sievePrefixSums[Q[i]] - sievePrefixSums[P[i] - 1] || 0;
  }

  return semiPrimeCounts;
}
