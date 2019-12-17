// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //First create the empty array of arrays
  const results = [];

  for (let i = 0; i < n; i++) {
    results[i] = [];
  }

  let counter = 1;
  let startCol = 0;
  let startRow = 0;
  let endRow = n - 1;
  let endCol = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    //top row
    for (let c = startCol; c <= endCol; c++) {
      results[startRow][c] = counter;
      counter++;
    }
    startRow++;

    //right column
    for (let r = startRow; r <= endRow; r++) {
      results[r][endCol] = counter;
      counter++;
    }
    endCol--;

    //bottom row
    for (let c = endCol; c >= startCol; c--) {
      results[endRow][c] = counter;
      counter++;
    }
    endRow--;

    //left column
    for (let r = endRow; r >= startRow; r--) {
      results[r][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  return results;
}

module.exports = matrix;
