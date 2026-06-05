// Immediately Invoked function Expressions (IIFE)

// Before ES6 introduced let and const (which are block-scoped), variables declared with var were only function-scoped. If you declared a var outside of a function, it attached itself to the global object (like window in the browser). If multiple scripts did this, variable names would collide and overwrite each other, causing massive bugs.

// An IFFE Function runs automatically when app or run is started or Executed.
// Syntax :   (Function_Definition)(Calling the function) => ()()

// named IFFE
(function chai() {
  // var a = 7; cannot be accessed outside the function
  console.log(`DB CONNECTED`);
})();
// to Stop IFFE function we have to put a ; at the end after calling the function.

// console.log(a);

((name) => {
  console.log(`DB CONNECTED AT ${name}`);
})("hitesh");
