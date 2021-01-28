const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const util = require('util')

const readPromiseAsync = async () => {
  // convert the function into the promise version
  const readFile = util.promisify(fs.readFile)
  
  const data = await readFile('./PatientInfo.csv', 'utf8')

  console.log(data)

  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  })

  console.log(records)
}

readPromiseAsync()