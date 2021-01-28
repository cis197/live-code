// READ APIs
const axios = require('axios')

// DOCS can be found on https://www.npmjs.com/package/axios

const promise1 = axios.get('https://jsonplaceholder.typicode.com/todos/1')
const promise2 = axios.get('https://jsonplaceholder.typicode.com/todos/1')

// Approach 1: using promises
// const fetchDataPromise = () => {
//   axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(resp => {
//     const { data } = resp
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
// }

// Approach 2: still using promises + async/ await
const fetchDataAwait = async () => {
  // const data = await promise1
  const data = await Promise.all([promise1, promise2])
  // const { asd } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  // const { data: data11 } = data1
  // const { data: data22 } = data2
  // console.log(data11)
  // console.log(data22)
  console.log(data[0].data)
  console.log(data[1].data)
  // console.log(data)
}

const country = ''

if (!country) {
  console.log('country is empty')
}

// fetchDataPromise()
fetchDataAwait()