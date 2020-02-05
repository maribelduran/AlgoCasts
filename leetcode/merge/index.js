// --- Directions
//Given a collection of intervals, merge all overlapping intervals.
//Example 1:
//Input: [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

//Example 2:
//Input: [[1,4],[4,5]]
//Output: [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = intervals => {
  if (!intervals || intervals.length < 2) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals.shift()];

  for (let curr of intervals) {
    let prev = result[result.length - 1];

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
    }
  }

  return result;
};

const answer = merge([
  [1, 4],
  [4, 5]
]);

console.log(answer);

module.exports = merge;
