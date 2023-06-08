const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(3, 2));

let x = 2;
const square1 = (x) => {
  return x * x;
};
console.log(square1(x));
const square2 = (x) => x * x;
console.log(square2(x));

const horn = () => {
  console.log("Toot");
};

console.log(horn());
