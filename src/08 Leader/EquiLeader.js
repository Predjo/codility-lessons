export function solution(A) {
  const N = A.length;
  const stack = [];

  A.forEach((n, i) => {
    if (!stack.length) {
      stack.push(n);
    } else {
      let top = stack.pop();
      if (top === n) {
        stack.push(top);
        stack.push(n);
      }
    }
  });

  if (!stack.length) {
    return 0;
  }

  const leader = stack.pop();
  const leaderNum = A.reduce((acc, n) => acc + (n === leader ? 1 : 0), 0);

  if (leaderNum <= N / 2) {
    return 0;
  }

  let leaderCount = 0;
  let equiLeaderCount = 0;

  A.forEach((n, i) => {
    if (n === leader) {
      leaderCount++;
    }

    if (
      leaderCount > (i + 1) / 2 &&
      leaderNum - leaderCount > (N - i - 1) / 2
    ) {
      equiLeaderCount++;
    }
  });

  return equiLeaderCount;
}
