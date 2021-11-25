// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

function digital_root(n) {
  if (n < 10) return n;

  let sum = 0;
  let number = n.toString().split("");

  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }

  return digital_root(sum);
}
console.log(digital_root(789));
