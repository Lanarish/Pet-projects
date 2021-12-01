function sumPairs(ints, sum) {
  const obj = {};

  for (let i = 0; i < ints.length; ++i) {
    if (obj[sum - ints[i]]) {
      return [sum - ints[i], ints[i]];
    }
    obj[ints[i]] = true;
  }
}
console.log(sumPairs([1, 4, 5, 11, 3, 15, 7], 8));
