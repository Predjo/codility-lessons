export function solution(A) {
  const N = A.length;
  const peakA = Array(N).fill(0);
  const nextPeakA = Array(N).fill(-1);

  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peakA[i] = 1;
    }
  }

  for (let i = N - 2; i >= 0; i--) {
    if (peakA[i]) {
      nextPeakA[i] = i;
    } else {
      nextPeakA[i] = nextPeakA[i + 1];
    }
  }

  let maxFlags = 0;
  let i = 1;

  while ((i - 1) * i <= N) {
    let pos = 0;
    let num = 0;

    while (pos < N && num < i) {
      pos = nextPeakA[pos];
      if (pos === -1) {
        break;
      }
      num += 1;
      pos += i;
    }
    maxFlags = Math.max(maxFlags, num);
    i++;
  }

  return maxFlags;
}
