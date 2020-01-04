// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const widths = [0];
  const flag = "endOfLevel";
  const array = [root, flag];

  while (array.length > 1) {
    let node = array.shift();
    if (node === flag) {
      widths.push(0);
      array.push(flag);
    } else {
      array.push(...node.children);
      widths[widths.length - 1]++;
    }
  }
  return widths;
}

module.exports = levelWidth;
