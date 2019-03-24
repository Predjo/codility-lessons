export function solution(N) {
  return Math.max(
    ...Number(N)
      .toString(2)
      .replace(/0+$/, "")
      .split(/1+/)
      .map(n => n.length),
    0
  );
}
