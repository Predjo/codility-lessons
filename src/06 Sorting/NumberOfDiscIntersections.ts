export function solution(A) {
  const MAX = 10000000;
  let intersect = 0;
  let open = 0;

  const line = [];

  A.forEach((n, i) => {
    // [ x, type(1: open, 0: close) ]
    line.push([i - n, 1]);
    line.push([i + n, 0]);
  });

  // sort by x and type
  line.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  line.forEach(n => {
    if (n[1] === 1) {
      intersect += open;
      open++;
    } else {
      open--;
    }
  });

  return intersect > MAX ? -1 : intersect;
}
