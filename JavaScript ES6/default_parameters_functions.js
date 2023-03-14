// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // the parameter value is specified the value of the argument should be added
console.log(increment(5)); // if the parameter value is not specified the default value argument will be added
