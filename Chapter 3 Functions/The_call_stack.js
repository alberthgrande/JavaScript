function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

/*
    We could show the flow of control schematically like this:
    
    not in function
        in greet
            in console.log
        in greet
    not in function
        in console.log
    not in function
 */

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ?? Maximum call stack size exceeded
