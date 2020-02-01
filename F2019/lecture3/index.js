// global scope

// function scope

// using scope for "private state": closures

// function createCounter() {
//   var count = 0;
//   return function() {
//     return (count += 1);
//   };
// }

// var counter = createCounter();

// console.log(counter());
// console.log(counter());

// var counter2 = createCounter();

// console.log(counter2());
// console.log(counter2());

// hoisting (variables & functions)

// `this` - person example

// var person = {
//   firstname: 'raj',
//   lastname: 'smith'
// };

// function fullname() {
//   console.log(this.firstname + ' ' + this.lastname);
// }

// `this` is evaluated at runtime

// exceptions: bind, call, apply

/******* OOOOOOOOOOOOP ***********/

const obj = {
  a: {}
};

const { a } = obj;

a.propert = 'sasf';

// intro: Prototype

// `new` + constructors

// prototype usecase

// what exactly does `new` do?
