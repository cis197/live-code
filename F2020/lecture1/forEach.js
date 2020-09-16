const arr = [1,2,3]

const square = x => x * x

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }



console.log(arr.map(elem => square(elem)))