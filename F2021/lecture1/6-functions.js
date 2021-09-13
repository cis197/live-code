// add a plus example that takes in one number
// and return a function that takes in a second number and returns the sum

// const sum = (a, b) => {
//   return a + b
// }

// const sum = (a, b) => a + b
// // const sum_of_2_3 = sum(2, 3)
// // console.log(sum_of_2_3)

// const sum_a = (a) => {
//   return b => sum(2, b)
//   // return b => sum(a, b)
// }

// const sum_2 = b => sum(2, b)

// const sum_2 = sum_a(2)

// console.log(sum_2(3))

// console.log(sum)

const arr = [1, 2, 3]

const square = x => x * x

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const handleElement = 

arr.forEach((elem, idx) => {
  console.log(idx)
  console.log(elem)
})


console.log(arr.map(elem => square(elem)))