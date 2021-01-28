// const sync = () => {
//   console.log('first')
//   console.log('second')
// }

// sync()

// const expensiveOperation = () => {
//   setTimeout(() => {
//     console.log('i am expensive')
//   }, 5000)
// }

// const async = () => {
//   console.log('first')
//   expensiveOperation()
//   console.log('second')
// }

// async() // -> how about now?


setTimeout(() => {
  console.log('woah')
}, 2)

let x = 1
while (x < 10000000000) {
  x = x + 1
}
console.log(x)

// const expensiveOperation = () => {
//   setTimeout(() => {
//     console.log('i am expensive')
//     return 'data'
//   }, 5000)
// }

// const async = () => {
//   console.log('first')
//   const data = expensiveOperation()
//   console.log(`data: ${data}`)
// }

// async() // -> how about now?