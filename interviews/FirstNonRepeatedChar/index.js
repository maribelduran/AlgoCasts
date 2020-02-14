//Find the first nonrepeated character in a string

const firstNonRepeatedChar = string => {
  let result = null;
  if (!string || !string.length) {
    return result;
  }

  const repeated = {};

  for (let i = 0; i < string.length; i++) {
    const rest = string.substring(i + 1);
    const char = string[i];
    if (rest.indexOf(char) === -1 && !repeated[char]) {
      return char;
    }
    repeated[char] = repeated[char] ? repeated[char] + 1 : 1;
  }
  return result;
};

//turn these into tests
const result = firstNonRepeatedChar("abcab");
console.log(result);

const result2 = firstNonRepeatedChar("aaabc");
console.log(result2);

const result3 = firstNonRepeatedChar("aa");
console.log(result3);
