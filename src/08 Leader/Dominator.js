export function solution(A) {
  const N = A.length;
  const stack = [];
  let index = 0;

  A.forEach((n, i) => {
    if (!stack.length) {
      stack.push(n);
      index = i;
    } else {
      let top = stack.pop();
      if (top === n) {
        stack.push(top);
        stack.push(n);
        index = i;
      }
    }
  });

  if (!stack.length) {
    return -1;
  }

  const candidate = stack.pop();
  const count = A.reduce((acc, n) => acc + (n === candidate ? 1 : 0), 0);

  return count > N / 2 ? index : -1;
}
