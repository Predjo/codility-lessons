export function solution(A) {
  const N = A.length;
  const peakA = [];

  for (let i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peakA.push(i);
    }
  }

  const peakNum = peakA.length;

  if (peakNum === 0 || peakNum === 1) {
    return peakNum;
  }

  let maxGroups = 1;

  for (let groupNum = peakNum; groupNum > 1; groupNum--) {
    if (N % groupNum === 0) {
      let groupSize = N / groupNum;
      let isValid = true;
      let currentGroup = 0;

      for (let peak of peakA) {
        if (Math.floor(peak / groupSize) > currentGroup) {
          isValid = false;
          break;
        } else if (Math.floor(peak / groupSize) == currentGroup) {
          currentGroup++;
        }
      }

      if (currentGroup !== groupNum) {
        isValid = false;
      }

      if (isValid) {
        return groupNum;
      }
    }
  }

  return maxGroups;
}
