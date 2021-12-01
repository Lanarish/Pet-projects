//
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives
function add(A, B) {
  const AL = A.length;
  const BL = B.length;
  const ML = Math.max(AL, BL);
  console.log(AL, BL, ML);
  let carry = 0,
    sum = "";

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i);
    console.log("a ", a);
    let b = +B.charAt(BL - i);
    console.log("b ", b);

    let t = carry + a + b;
    console.log("t ", t);
    carry = (t / 10) | 0;
    console.log("carry ", carry);
    t %= 10;
    console.log("t1 ", t);

    sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}

console.log(add("3874", "94089"));
