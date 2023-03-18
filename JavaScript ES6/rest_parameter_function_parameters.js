// rest parameter for function parameters
// These arguments are stored in an array that can be
// accessed later from inside the function.
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(0, 1, 2));
console.log(sum(1, 2, 3, 4));
