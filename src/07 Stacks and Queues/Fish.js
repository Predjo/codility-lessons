export function solution(A, B) {
  const N = A.length;
  const upstream = [];
  const downstream = [];

  for (let i = 0; i < N; i++) {
    let fish1 = A[i];
    let direction = B[i];

    if (direction === 1) {
      downstream.push(fish1);
    } else if (direction === 0 && !downstream.length) {
      upstream.push(fish1);
    } else {
      let isAlive = true;

      while (isAlive && downstream.length) {
        let fish2 = downstream.pop();

        if (fish2 > fish1) {
          isAlive = false;
          downstream.push(fish2);
        }
      }

      if (isAlive) {
        upstream.push(fish1);
      }
    }
  }

  return upstream.length + downstream.length;
}
