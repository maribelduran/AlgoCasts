// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //Solution 1: iterative with forEach
  /*const checker = ["a", "e", "i", "o", "u"];
  let counter = 0;
  str
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (checker.includes(char)) {
        counter++;
      }
    });
  return counter;
  */

  //Solution 2: iterative with reduce
  const checker = ["a", "e", "i", "o", "u"];

  const counter = str
    .toLowerCase()
    .split("")
    .reduce((counter, char) => {
      checker.includes(char) && counter++;
      return counter;
    }, 0);
  return counter;

  //Solution 3: use regex expression
  /*const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
  */
}

module.exports = vowels;
