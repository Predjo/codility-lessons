function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }

  return gcd(b, a % b);
}

export function solution(N, M) {
  const step = gcd(N, M);
  return N / step;
}
