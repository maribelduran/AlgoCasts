var merge = function(intervals) {
  if (!intervals || intervals.length == 0) return intervals;
  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  var ans = [intervals[0]];
  for (var i = 1; i < intervals.length; i++) {
    var start = intervals[i][0];
    var end = intervals[i][1];
    var len = ans.length - 1;
    var start_a = ans[len][0];
    var end_a = ans[len][1];
    if (end_a >= start) {
      ans[len][1] = Math.max(end, end_a);
    } else {
      ans.push(intervals[i]);
    }
  }
  return ans;
};

var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); //Arr have smaller element come first
  for (let i = 1; i < intervals.length; i += 1) {
    curr = intervals[i];
    prev = intervals[i - 1];
    if (curr[0] <= prev[1]) {
      intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      intervals.splice(i - 1, 1);
      i -= 1; // After merge, the arr become shorter
    }
  }
  return intervals;
};

function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) =>
    a.start !== b.start ? a.start - b.start : a.end - b.end
  );
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr.start <= prev.end) {
      prev.end = Math.max(prev.end, curr.end);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}
