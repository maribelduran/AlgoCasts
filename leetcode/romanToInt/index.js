// --- Directions
//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Symbol       Value
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000

//For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//I can be placed before V (5) and X (10) to make 4 and 9.
//X can be placed before L (50) and C (100) to make 40 and 90.
//C can be placed before D (500) and M (1000) to make 400 and 900.
//Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

//Example 1:
//Input: "III"
//Output: 3

//Example 2:
//Input: "IV"
//Output: 4

//Example 3:
//Input: "IX"
//Output: 9

//Example 4:
//Input: "LVIII"
//Output: 58
//Explanation: L = 50, V= 5, III = 3.

//Example 5:
//Input: "MCMXCIV"
//Output: 1994
//Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */

//creat a map to lookup the value for each symbol
const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const romanToInt = function(s) {
  let result = 0;
  let chars = s.split("");

  while (chars.length) {
    let symbol = chars.splice(0, 2).join("");

    if (map[symbol]) {
      result += map[symbol];
      continue;
    }

    chars.unshift(symbol[1]);
    symbol = symbol[0];

    //there was an invalid symbol. return null
    if (!map[symbol]) {
      return null;
    }
    result += map[symbol];
  }

  return result;
};

const answer = romanToInt("III");

console.log(answer);

module.exports = romanToInt;
