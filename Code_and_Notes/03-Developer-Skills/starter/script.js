// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Using Google, StackOverflow and MDN

// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1978));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Using Google, StackOverflow and MDN
// PROBLEM 1:
//  We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems.
// - How to ignore errors.
//  - Find max value in temp array
//  - Find min value in temp array
//  - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement the functionality twice? NO! Just merge two arrays

// 2) Breaking up in to sub-problems
// - Merge 2 arrays?

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
//////////////////////////////////////////////////////////////////////////////

//Debugging with the Console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  //B) FIND
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFy
console.log(amplitudeBug);
*/

//////////////////////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forcasted maximum temperature, the thermometer displays a string with these temperatures

Example: [17, 21, 23] will print "... 17℃ in 1 days ... 21℃ in 2 days ... 23℃ in 3 days ..."

Create a function 'printForcast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

QUESTIONS:
- How do you have the display show different lengths of arrays in the string?
- What happens if something other than a number is passed in the array (by accident, maybe)?

DIVIDE AND CONQUER:
- Have a looping function that generates the template literal for each valid section in the array and log it to the console.
- If the value is not a number, return something like "Unknown" for that date
*/

// // TEST DATA 1:
const testData1 = [17, 21, 23];

// TEST DATA 2:
const testData2 = [12, 5, -5, 0, 4];

const printForcastMine = function (arr) {
  const report = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;

    // console.log(`... ${arr[i]}℃ in ${arr.indexOf(arr[i]) + 1} days `); // NOT GOING TO WORK! DOES NOT GO ON SAME LINE
    // console.log(arr.join(`... ${arr[i]}℃ in ${arr.indexOf(arr[i]) + 1} days `)); // NOT GOING TO WORK! PUTS IN A COMMA BETWEEN VALUES
    report.push(`... ${arr[i]}℃ in ${arr.indexOf(arr[i]) + 1} days`);
  }

  // console.log(report);
  // console.log(report.toString(''));
  console.log(report.join(' ') + ' ...');
};

printForcastMine(testData1);
printForcastMine(testData2);

// Solution in Lesson

// 1)Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array to a string
// - Transfrom each element to string with ℃
// - String needs to contain day (index +1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃`);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForcast(data1);
