const merge = require("./index");

test("Merge function exists", () => {
  expect(merge).toBeDefined();
});

test("merge combines a collection intervals", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18]
  ]);
});

test("Merge merges two overlapping intervals together", () => {
  expect(
    merge([
      [1, 4],
      [4, 5]
    ])
  ).toEqual([[1, 5]]);
});
