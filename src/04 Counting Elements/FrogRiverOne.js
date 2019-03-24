function count(A) {
  const countA = Array(A.length).fill(Infinity);
  A.forEach((n, i) => (countA[n - 1] = Math.min(countA[n - 1], i)));
  return countA;
}

export function solution(X, A) {
  const countedA = count(A).slice(0, X);

  if (countedA.some(n => n === Infinity || X > A.length)) {
    return -1;
  }

  return Math.max(...countedA);
}
