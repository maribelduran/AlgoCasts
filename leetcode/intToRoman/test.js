const intToRoman = require("./index");

test("intToRoman function exists", () => {
  expect(intToRoman).toBeDefined();
});

test("III is the roman numeral of 3", () => {
  expect(intToRoman(3)).toEqual("III");
});

test("IV is the roman numeral of 4", () => {
  expect(intToRoman(4)).toEqual("IV");
});

test("IX is the roman numeral of 9", () => {
  expect(intToRoman(9)).toEqual("IX");
});

test("LVIII is the roman numeral of 58", () => {
  expect(intToRoman(58)).toEqual("LVIII");
});

test("MCMXCIV is the roman numeral of 1994", () => {
  expect(intToRoman(1994)).toEqual("MCMXCIV");
});
