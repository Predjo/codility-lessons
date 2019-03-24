function count(A) {
  const countA = Array(A.length).fill(0);
  A.forEach(n => countA[n - 1]++);
  return countA;
}

export function solution(A) {
  return Number(!count(A).some(n => n !== 1));
}
