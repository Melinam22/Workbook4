"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = numbers.reduce((totalaverage, score) => totalaverage + score, 0);

  return sum / numbers.length;
}

console.log("My average score:", average(myScores));
console.log("Your average score:", average(yourScores));
