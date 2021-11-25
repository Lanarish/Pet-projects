function anagramDifference(w1, w2) {
  let w1Arr = w1.split("");
  let w2Arr = w2.split("");

  for (let i = 0; i < w1Arr.length; ++i) {
    if (w2Arr.indexOf(w1Arr[i]) != -1) {
      w2Arr.splice(w2Arr.indexOf(w1Arr[i]), 1);
      w1Arr.splice(i, 1);
      i--;
    }
  }
  return w1Arr.length + w2Arr.length;
}

console.log(anagramDifference("bcda", "asdt"));
