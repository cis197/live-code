// object structuring

// const obj = {
//   name: 'Peter',
//   age: '20',
//   name: 'James'
// }

// console.log(obj)

let name = 'Peter'
let age = 20
let ls = [1, 2, 3]
let obj = { 'name': 'peter' }

// // const obj_es5 = { name: name, age: age }

// // console.log(obj_es5)

const obj_es6 = { name, age, ls, obj }

// age = 21
// ls.push(4)
// obj['age'] = 20

// console.log(obj_es6)

const { name: myname, age: myage } = obj_es6

console.log(myname)
console.log(myage)


// const { name: nameother, age: ageOther } = obj

// console.log(nameother)
// console.log(ageOther)