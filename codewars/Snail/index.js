const snail = function(arr) {
  const result = [];
  let top = 0, bottom = arr.length-1;
  let left = 0, right = arr[0].length-1;
  
  do {
    for (let i = left; i <= right; i++)
    {result.push(arr[top][i])} // top row
    for (let i = top+1; i <= bottom; i++)
    {result.push(arr[i][right])} // right column
    for (let i = right-1; i >= left; i--)
    {result.push(arr[bottom][i])} // bottom row
    for (let i = bottom-1; i > top; i--)
    {result.push(arr[i][left])} // left column
    top++; bottom--; left++; right--;
  } while (top <= bottom);
  
  return result;
}

console.log(
  snail([
    [1, 2, 31],
    [42, 5, 6],
    [7, 81, 9],
  ])
);
