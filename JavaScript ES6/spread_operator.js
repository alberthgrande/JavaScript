// ES5
var arr1 = [6, 89, 3, 45];
var maximus1 = Math.max.apply(null, arr1);

// ES6 ...arr returns an unpacked array
const arr2 = [6, 89, 3, 45];
const maximus2 = Math.max(...arr2);

const arr3 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr4;

arr4 = [...arr3]; // Change this line

console.log(arr4);
