function sumIntervals(intervals) {
  const numbers = [];
  intervals.forEach(function (interval) {
    for (let i = interval[0]; i < interval[1]; i++) {
      if (numbers.indexOf(i) == -1) {
        numbers.push(i);
      }
    }
  });
  return numbers.length;
}
const test2 = [
  [1, 4],
  [7, 10],
  [3, 5],
];
console.log(sumIntervals(test2));
