export function solution(S) {
  const A = S.split('');
  const N = A.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    const n = A[i];

    if ('([{'.includes(n)) {
      stack.push(n);
    } else {
      if (!stack.length) {
        return 0;
      }

      let top = stack.pop();

      if (
        (top === '(' && n !== ')') ||
        (top === '[' && n !== ']') ||
        (top === '{' && n !== '}')
      ) {
        return 0;
      }
    }
  }

  return stack.length > 0 ? 0 : 1;
}
