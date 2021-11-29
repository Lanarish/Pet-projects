function anagramDifference(w1, w2) {
  let w1Arr = w1.split("");
  let w2Arr = w2.split("");

  for (let i = 0; i < w1Arr.length; ++i) {
    const w2Index = w2Arr.indexOf(w1Arr[i]);
    if (w2Index != -1) {
      w2Arr.splice(w2Index, 1);
      w1Arr.splice(i, 1);
      i--;
    }
  }
  return w1Arr.length + w2Arr.length;
}

console.log(anagramDifference("bcda", "asdt"));
