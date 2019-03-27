export function solution(N) {
  let result = 0;
  let i = 1;

  while (i < Math.sqrt(N)) {
    if (N % i === 0) {
      result += 2;
    }
    i++;
  }

  if (i === Math.sqrt(N)) {
    result++;
  }

  return result;
}
