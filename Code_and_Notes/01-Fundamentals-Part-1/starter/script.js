/*

// Values and Variables
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM"
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)


// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const, and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;

var job = 'programmer',
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


// Basic Operators

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = "Schmedtmann";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4, // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --;
x --;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


// Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// CHALLENGE #1

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

const massMark = 95
const heightMark = 1.88
const massJohn = 85
const heightJohn = 1.76

const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)
let markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI)


// Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\multiple \n\lines');
console.log(`String
multiple
lines`);


// Taking Decisions: if / else Statements

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// CHALLENGE #2

const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

let BMIResults;

if (BMIMark > BMIJohn) {
  BMIResults = `Mark's BMI is higher than John's!`;
} else {
  BMIResults = `John's BMI is highger than Mark's!`;
}

console.log(BMIResults)

let BMIResultsNum;

if (BMIMark > BMIJohn) {
  BMIResultsNum = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
  BMIResultsNum = `John's BMI (${BMIJohn}) is highger than Mark's (${BMIMark})!`;
}

console.log(BMIResultsNum);


// Type Conversion and Coercion

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old.');
console.log('I am ' + String(23) + ' years old.'); // NOT NECESSARY!!!!
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1; // "1"1 - 1 = "1"0
console.log(n);


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}


// Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)'); // NOT A GOOD IDEA.

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { //'23' == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number.");
} else if (favourite === 9) {
  console.log("9 is also a cool number.");
} else {
  console.log("Number is not 23 or 7.");
}

if (favourite !== 23) console.log("Why not 23?");


// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log("Someone else should drive...")
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log("Someone else should drive...")
}


// CHALLENGE #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else {
//   console.log('Both win the trophy');
// }
// Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy');
// } else {
//   console.log('Both win the trophy');
// }
//Bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy');
} else {
  console.log('No team wins the trophy!')
}


// The switch Statement

const day = 'monday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if ((day === 'wednesday') || (day === 'thursday')) {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


// Statements and Expressions

3 + 4                                     // Expression, produces a value
1991                                      // Expression, has value in JavaScript
true && false && !false                   // Expression, Boolean value

if (23 > 10) {                            // Statement, doesn't produce value, but performs an action by declaring variable.
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);  // Expressions only in Template Literals.


// The Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/


// Challenge 4!

const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20; // Bill is between 50 and 300, gets 15%, otherwise 20%

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);