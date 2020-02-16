const lcs = (string1, string2) => {
  let result = "";

  if (!string1.length && !string2.length) {
    return result;
  }

  for (let i = 0; i < string2.length; i++) {
    const substring = string2.substring(i);
    let cs = "";
    let search = string1;

    for (char of substring) {
      const index = search.indexOf(char);
      if (index !== -1) {
        cs += char;
        search = search.slice(index + 1);
      }
    }
    if (cs.length > result.length) {
      result = cs;
    }
  }

  return result;
};

//turn these into tests
const result1 = lcs("ABCDGH", "AEDFHR");
const result2 = lcs("AGGTAB", "GXTXAYB");
const result3 = lcs("ABCD", "EFG");
const result4 = lcs("ABC", "CBA");
const result5 = lcs("XYZ", "ZYXXY");
console.log(result1);
console.log(result2);
console.log(result3.length);
console.log(result4);
console.log(result5);
