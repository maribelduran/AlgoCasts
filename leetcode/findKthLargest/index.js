//Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

//Example 1:

//Input: [3,2,1,5,6,4] and k = 2
//Output: 5
//Example 2:

//Input: [3,2,3,1,2,4,5,5,6] and k = 4
//Output: 4
//Note:
//You may assume k is always valid, 1 ≤ k ≤ array's length.

const findKthLargest = (nums, k) => {
  if (!nums || !nums.length) {
    return null;
  }
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};

const answer1 = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(answer1);
