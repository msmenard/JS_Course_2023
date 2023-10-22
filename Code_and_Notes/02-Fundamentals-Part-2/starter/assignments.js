'use strict';

/*
// Functions Assignment
// function describeCountry(country, population, capitalCity) {
//   const geographyLesson = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//   return geographyLesson;
// }

// const finland = describeCountry('Finland', 6, 'Helsinki');
// const unitedStates = describeCountry('The United States of America', 331.9, 'Washington DC');
// const canada = describeCountry('Canada', 39, 'Ottawa');

// console.log(finland, unitedStates, canada);

// Function Declarations vs Expressions Assignment
function percentageOfWorld1(population) { // Function Declaration
  return (population / 7900) * 100;
}

// const popPercentFinland = percentageOfWorld1(6);
// const popPercentUsa = percentageOfWorld1(331.9);
// const popPercentCanada = percentageOfWorld1(39);

// console.log(`Finland has ${popPercentFinland} of the world's population. The United States has ${popPercentUsa} of the world's population. Canada has ${popPercentCanada} of the world's population.`);


// const percentageOfWorld2 = function (population) { // Function Expression
//   return (population / 7900) * 100;
// }

// const popPercentFinland2 = percentageOfWorld2(6);
// const popPercentUsa2 = percentageOfWorld2(331.9);
// const popPercentCanada2 = percentageOfWorld2(39);

// console.log(`Finland STILL has ${popPercentFinland2} of the world's population. The United States STILL has ${popPercentUsa2} of the world's population. Canada STILL has ${popPercentCanada2} of the world's population.`);

// // Arrow Functions Assignment

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const popPercentFinland3 = percentageOfWorld3(6);
// const popPercentUsa3 = percentageOfWorld3(331.9);
// const popPercentCanada3 = percentageOfWorld3(39);

// console.log(`Finland CONTINUES TO HAVE ${popPercentFinland3} of the world's population. The United States CONTINUES TO HAVE has ${popPercentUsa3} of the world's population. Canada CONTINUES TO HAVE has ${popPercentCanada3} of the world's population.`);

// Functions Calling Other Functions Assignemnt

function describePopulation(country, population) {
  const popPercent = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${popPercent}% of the world.`;
}

// console.log(describePopulation('Finland', 6));
// console.log(describePopulation('The United States of America', 331.9));
// console.log(describePopulation('Canada', 39));


// Introduction to Arrays Assignment

const populations = [6, 331.9, 39, 1441];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(6), percentageOfWorld1(331.9), percentageOfWorld1(39), percentageOfWorld1(1441)];
console.log(percentages);


// Basic Array Operations (Methods) Assignment

const neighbours = ['Canada', 'Mexico'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('Mexico'));
neighbours[1] = 'Republic of Mexico';
console.log(neighbours);


// Introduction to Objects Assignment

const myCountry = {
  country: 'The United States of America',
  capital: 'Washington DC',
  language: 'English',
  population: 331.9,
  neighbours: ['Canada', 'Mexico']
};


// Dot vs. Bracket Notation Assignment

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`)

myCountry.population = 333.9;

console.log(myCountry.population);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`)

myCountry['population'] = 331.9;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighboring countries and a capital called ${myCountry.capital}.`)


// Object Methods Assignment

const myCountry = {
  country: 'The United States of America',
  capital: 'Washington DC',
  language: 'English',
  population: 331.9,
  neighbours: ['Canada', 'Mexico'],

  describe: function () {
    return console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}.`);
  },

  checkIsland: function () {
    // this.isIsland = 3;
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  }
};

// myCountry.describe = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighboring countries and a capital called ${this.capital}.`

myCountry.describe();                // MAKE SURE TO CALL IT AS A FUNCTION! Else it returns as a string of the code.

myCountry.checkIsland();

console.log(`It is ${myCountry.isIsland} that ${myCountry.country} is an island.`);

console.log(myCountry);


// Iteration: The for Loop

for (let voters = 1; voters <= 50; voters++) {
  console.log(`Voter number ${voters} is currently voting`);
}


// Looping Arrays, Breaking and Continuing Assignment

const populations = [6, 331.9, 39, 1441];
const populations2 = [];

function percentageOfWorld1(population) { // Function Declaration
  return (population / 7900) * 100;
}

for (let i = 0; i < populations[i]; i++) {
  populations2.push(percentageOfWorld1(populations[i]));
}

console.log(populations2)


// Looping Backwards and Loops in Loops

const listOfNeighbours = [                                            // I messed up the array at first.
  ['Canada', 'Mexico'],                                               // Make sure to check what you are supposed to start with!!!!! 
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
]

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbor: ${listOfNeighbours[i][y]}`)
}


// The while Loop Assignment

const populations = [6, 331.9, 39, 1441];
const populations2 = [];

function percentageOfWorld1(population) { // Function Declaration
  return (population / 7900) * 100;
}

for (let i = 0; i < populations[i]; i++) {
  populations2.push(percentageOfWorld1(populations[i]));
}

console.log(populations2);

const percentages3 = [];                                        // My Solution
let i = 0
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  // i = percentages3.length;
  // if (percentages3.length === populations.length) break;
  i++;
}
console.log(percentages3);

const percentages4 = [];                                        // Example Solution
let y = 0;
while (y < populations.length) {
  const perc = percentageOfWorld1(populations[y]);
  percentages4.push(perc);
  y++;
}
console.log(percentages4);
*/