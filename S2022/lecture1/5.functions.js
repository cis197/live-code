// add a plus example that takes in one number
// and return a function that takes in a second number and returns the sum

const sum = (a, b) => {
  return a + b
}

// function sum (a, b) {
//   return a + b
// }

// const sum = (a, b) => a + b

// const sum_of_2_3 = sum(2, 3)
// console.log(sum_of_2_3)

const sum_a = (a) => {
  return b => sum(a, b)
}

const sum_2 = sum_a(2)

console.log(sum_2(3))

// console.log(sum)
// console.log(typeof(sum))
// console.log(sum(2, 3))