function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }

  return gcd(b, a % b);
}

function hasSamePrimeFactors(a, b) {
  let newA = a;
  let newB = b;
  let activeGcd = gcd(a, b);
  let gcdA = activeGcd;
  let gcdB = activeGcd;

  if (activeGcd === 1) {
    return false;
  }

  while (gcdA !== 1 && newA !== 1) {
    newA /= gcdA;
    gcdA = gcd(newA, gcdA);
  }

  while (gcdB !== 1 && newB !== 1) {
    newB /= gcdB;
    gcdB = gcd(newB, gcdB);
  }

  return newA === 1 && newB === 1;
}

export function solution(A, B) {
  let N = A.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    let a = A[i];
    let b = B[i];

    if (a === b || (a !== 1 && b !== 1 && hasSamePrimeFactors(a, b))) {
      count++;
    }
  }

  return count;
}
