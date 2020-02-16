// The Problem
// Given an array of people, with their birth and death years,
// find the year with the highest population.

// What I'm looking for:
//
// 1. you're able to vocalize your thoughts, it's important to be able
//    communicate what's going on in your head
//
// 2. you're able to keep good code hygiene as you go
//
// 3. Test drive the implementation
//
// Tips:
//
// 1. The right pane is a fully interactive REPL, use it if you need
//    to explore some functions
//
// 2. It's fine to Google how to use APIs, not fine to Google
//    the solution
//
// 3. Don't worry about finding the most efficient solution right away.
//    Once you have a working solution you can optimize it.
//
// Good luck!

const example_data = [
  { birthYear: 1920, deathYear: 1954 },
  { birthYear: 1931, deathYear: 1975 },
  { birthYear: 1921, deathYear: 1922 },
  { birthYear: 1992, deathYear: 2007 },
  { birthYear: 1953, deathYear: 2017 },
  { birthYear: 1700, deathYear: 1722 },
  { birthYear: 2016, deathYear: 2017 },
  { birthYear: 1930, deathYear: 2001 },
  { birthYear: 1990, deathYear: 2011 },
  { birthYear: 1967, deathYear: 2019 },
  { birthYear: 1905, deathYear: 1987 },
  { birthYear: 1990, deathYear: 2018 },
  { birthYear: 1998, deathYear: 2015 },
  { birthYear: 1993, deathYear: 2019 }
];

const assertEquals = (actual, expected, message) => {
  if (actual === expected) {
    console.log("PASS");
  } else {
    console.log(`FAIL ${message} - actual: ${actual}, expected: ${expected}`);
  }
};

const maxYearWithMaxPopulation = data => {
  const populationChange = {};

  for (let person of data) {
    populationChange[person.birthYear] = populationChange[person.birthYear]
      ? populationChange[person.birthYear] + 1
      : 1;
    populationChange[person.deathYear] = populationChange[person.deathYear]
      ? populationChange[person.deathYear] - 1
      : -1;
  }

  let maxPopulationIncrease = 0;
  let maxPopulationYear = null;

  let years = Object.keys(populationChange).sort((a, b) => a - b);

  let change = 0;
  for (let year of years) {
    change += populationChange[year];
    if (change > maxPopulationIncrease) {
      maxPopulationIncrease = change;
      maxPopulationYear = year;
    }
  }

  return parseInt(maxPopulationYear);
};

assertEquals(
  maxYearWithMaxPopulation([{ birthYear: 1990, deathYear: 2001 }]),
  1990,
  "works with single person"
);
assertEquals(
  maxYearWithMaxPopulation([
    { birthYear: 1990, deathYear: 2001 },
    { birthYear: 1985, deathYear: 1995 }
  ]),
  1990,
  "works with a single overlap"
);
assertEquals(
  maxYearWithMaxPopulation(example_data),
  1998,
  "works with the example data set"
);
