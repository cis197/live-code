const arr = [1,2,3]

const square = x => x * x

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// const handleElement = 

// arr.forEach((elem, idx) => {
//   console.log(idx)
//   console.log(elem)
// })

const arr_squared = arr.map(elem => square(elem))

console.log(arr_squared)
console.log(arr)