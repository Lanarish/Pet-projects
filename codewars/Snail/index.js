const snail = (array) => {
  let result = [];
  while (array.length) {
    result.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }
    result.push(...(array.pop() || []).reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }
  return result;
};

console.log(
  snail([
    [1, 2, 31],
    [42, 5, 6],
    [7, 81, 9],
  ])
);
