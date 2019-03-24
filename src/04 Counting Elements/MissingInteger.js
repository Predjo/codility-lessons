export function solution(A) {
  const F = A.sort((a, b) => a - b).filter(n => n > 0);

  if (F[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < F.length - 1; i++) {
    if (F[i] + 2 <= F[i + 1]) {
      return F[i] + 1;
    }
  }

  return F[F.length - 1] + 1;
}
