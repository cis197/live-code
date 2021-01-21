// object structuring

// const obj = {
//   name: 'Peter',
//   age: '20',
//   name: 'James'
// }

// console.log(obj)

let name = 'Peter'
let age = 20

// const obj_es5 = { name: name, age: age }

// console.log(obj_es5)

const obj_es6 = { name, age }

let { name: nameOther, age: ageOther } = obj_es6

console.log(nameOther)
console.log(ageOther)


// const { name: nameother, age: ageOther } = obj

// console.log(nameother)
// console.log(ageOther)