// READ APIs
const axios = require('axios')

// DOCS can be found on https://www.npmjs.com/package/axios

const data = axios.get('https://jsonplaceholder.typicode.com/todos/1')

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
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(data)
}

// fetchDataPromise()
fetchDataAwait()