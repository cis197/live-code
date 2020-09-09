// using var variables are not confined to their own scopes

// for (var i = 0; i < 10; i++) {}

// console.log(i)

// if (true) {
//   var xyz = 14
// }

// console.log(xyz)


// using let solves the issue

for (let i = 0; i < 10; i++) {
  let i 
}

console.log(i)

if (true) {
  let i = 14
}

console.log(xyz)