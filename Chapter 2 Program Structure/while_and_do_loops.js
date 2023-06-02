// let num = 0;
// while (num <= 12) {
//   console.log(num);
//   num = num + 2;
// }

// let result = 1;
// let counter = 0;

// while (counter < 10) {
//   result *= 2;
//   counter += 1;
// }
// console.log(result);
// console.log(counter);
const prompt = require("prompt-sync")();
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
