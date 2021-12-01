function deepCount(a) {
  let count = a.length;
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));
