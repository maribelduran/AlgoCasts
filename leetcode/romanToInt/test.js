const romanToInt = require("./index");

test("romanToInt function exists", () => {
  expect(romanToInt).toBeDefined();
});

test("III is the roman numeral of 3", () => {
  expect(romanToInt("III")).toEqual(3);
});

test("IV is the roman numeral of 4", () => {
  expect(romanToInt("IV")).toEqual(4);
});

test("IX is the roman numberal of 9", () => {
  expect(romanToInt("IX")).toEqual(9);
});

test("LVIII is the roman numeral of 58", () => {
  expect(romanToInt("LVIII")).toEqual(58);
});

test("MCMXCIV is the roman numeral of 1994", () => {
  expect(romanToInt("MCMXCIV")).toEqual(1994);
});
