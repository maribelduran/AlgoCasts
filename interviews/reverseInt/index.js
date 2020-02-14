// Reverse an integer: 359201 => 102953

const reverseInt = number => {
  const reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed);
};

reverseInt(359201);

// A NEW CHALLENGER APPROACHES!!!
// The integer cannot be transformed into a string

const reverseInt2 = number => {
  const reversed = [];

  while (number > 0) {
    const result = number % 10; // 1,0
    number -= result;
    reversed.push(result); // [1,0,2,9,5,3]
    number /= 10; // 35920, 3592,
  }

  let answer = 0;
  for (let i = 0; i < reversed.length; i++) {
    answer *= 10;
    const added = reversed[i];
    answer += added;
    //1 * 100000 =
  }
  return answer;
};

// you can only enumerate once
const reverseInt3 = number => {
  let reversed = 0;

  while (number > 0) {
    const digit = number % 10;
    number -= digit;
    number /= 10;

    reversed *= 10;
    reversed += digit;
  }

  return reversed;
};

// you cannot enumerate at all
//use recursion
const reverseInt4 = (number, reversed = 0) => {
  if (number === 0) {
    return reversed;
  }

  const digit = number % 10;
  reversed * reversed * 10 + digit;
  number = (number - digit) / 10;
  return reverseInt4(number, reversed);
};
