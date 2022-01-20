// READ APIs
const axios = require('axios')

// DOCS can be found on https://www.npmjs.com/package/axios

const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos/1')
const promise2 = axios.get('https://jsonplaceholder.typicode.com/todos/2')

console.log(promise1)

// Approach 1: using promises
const fetchDataPromise = () => {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(resp => {
    const { data } = resp
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
}

// await placeOrder(await chooseToppings())

const square = x => x * x

// Approach 2: async/ await
const fetchDataAwait = async () => {
  // const data = await promise1
  console.log(square(3))
  const data = await Promise.all([promise1, promise2])
  // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // const { data: data11 } = data1
  // const { data: data22 } = data2
  // console.log(data11)
  // console.log(data22)
  // console.log(data[0].data)
  // console.log(data[1].data)
  // console.log(data)

  // console.log(data)
  const [req1, req2] = data
  console.log(req1.data)
  console.log(req2.data)

  // const { data, status } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // console.log(data)
  // console.log(status)

  // console.log(data[0].data)
  // console.log(data[1].data)
}

// fetchDataPromise()
fetchDataAwait()

// const fetchAsync = async => {
//   const result = await square(3)
// }

// fetchAsync()