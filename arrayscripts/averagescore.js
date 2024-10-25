"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//function average(scores) {
//  if (numbers.length === 0) {
//    return 0;
//  }

//  let sum = scores.reduce((totalaverage, score) => totalaverage + score, 0);

//  return sum / myScores.length;
//}

//console.log("My average score:", average(myScores));
//console.log("Your average score:", average(yourScores));

function getAverage(scores) {
  let sumOfAllScores = 0;
  for (const score of scores) {
    sumOfAllScores = sumOfAllScores + score; //sumOfAllScores += score;
  }

  let averageScore = sumOfAllScores / scores.length;
  return averageScore;
}

let myAverageScore = getAverage(myScores);
console.log(myAverageScore.toFixed(2));

let yourAverageScore = getAverage(yourScores);
console.log(yourAverageScore.toFixed(2));


