export function solution(S) {
  const A = S.split('');
  const N = A.length;
  const stack = [];

  for (let i = 0; i < N; i++) {
    const n = A[i];

    if (n === '(') {
      stack.push(n);
    } else {
      if (!stack.length) {
        return 0;
      }
      stack.pop();
    }
  }

  return stack.length > 0 ? 0 : 1;
}
