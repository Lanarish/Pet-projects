let TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function maxSum(root) {
  if (!root) return 0;

  let leftSide = maxSum(root.left);

  let rightSide = maxSum(root.right);

  return Math.max(leftSide, rightSide) + root.value;
}
let root = new TreeNode(
  5,
  new TreeNode(-22, new TreeNode(9), new TreeNode(50)),
  new TreeNode(11, new TreeNode(9), new TreeNode(2))
);

console.log(maxSum(root));
