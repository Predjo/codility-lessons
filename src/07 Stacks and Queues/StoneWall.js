export function solution(H) {
  let currentHeight = 0;
  const stack = [];
  const wall = [];

  H.forEach(n => {
    if (n > currentHeight) {
      let diff = n - currentHeight;
      wall.push(diff);
      stack.push(diff);
      currentHeight += diff;
    } else if (n < currentHeight) {
      while (n < currentHeight) {
        let diff = stack.pop();
        currentHeight -= diff;
      }

      let diff = n - currentHeight;

      if (diff) {
        wall.push(diff);
        stack.push(diff);
        currentHeight += diff;
      }
    }
  });

  return wall.length;
}
