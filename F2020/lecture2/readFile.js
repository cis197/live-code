// READ FILES

const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const util = require('util')

// const data = fs.readFile('./PatientInfo.csv', 'utf8', () => {})
// console.log('hello')
// console.log(data)
// console.log('hello2')

// Approach 1: READ FILE USING CALLBACK
const readCallback = () => {
  const callback = function (err, data) {
    const records = parse(data, {
      columns: true,
      skip_empty_lines: true
    })
  
    console.log(records)
  }
  
  fs.readFile('./PatientInfo.csv', 'utf8', callback)
}

// Approach 2: READ FILE USING PROMISES
const readPromise = () => {
  // convert the function into the promise version
  // reference: https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly
  const readFile = util.promisify(fs.readFile)

  readFile('./PatientInfo.csv', 'utf8').then(data => {
    const records = parse(data, {
      columns: true,
      skip_empty_lines: true
    })

    console.log(records)
  })
}

// Approach 3: READ FILE USING PROMISES + async/ await
const readPromiseAsync = () => {
  // convert the function into the promise version
  const readFile = util.promisify(fs.readFile)

  const data = readFile('./PatientInfo.csv', 'utf8')

  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  })

  console.log(records)
}

const readSync = () => {
  let patientCsv = fs.readFileSync()
  let records = parse(patientCsv, {
    columns: true,
    skip_empty_lines: true
  })
  console.log(records)
}

// readCallback()
// readPromise()
readPromiseAsync()
