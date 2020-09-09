// READ FILES

const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const util = require('util')

const data = fs.readFile('./PatientInfo.csv', 'utf8', () => {})
console.log('hello')
console.log(data)
console.log('hello')

// Approach 1: READ FILE USING CALLBACK
const readCallback = () => {
  fs.readFile('./PatientInfo.csv', 'utf8', (err, data) => {
    const records = parse(data, {
      columns: true,
      skip_empty_lines: true
    })

    console.log(records)
  })
}

// Approach 2: READ FILE USING PROMISES
const readPromise = () => {
  // convert the function into the promise version
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
const readPromiseAsync = async () => {
  // convert the function into the promise version
  const readFile = util.promisify(fs.readFile)

  const data = await readFile('./PatientInfo.csv', 'utf8')
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
