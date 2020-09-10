const csv = require('csv-parser')
const fs = require('fs')

const records = []

// const appendRecord = data => {
//   records.push(data)
// }

const printRecord = () => {
  console.log(records)
}

// THE WAY WE DID IN HOMEWORK
fs.createReadStream('./PatientInfo.csv')
  .pipe(csv())
  .on('data', data => {
    records.push(data)
  })
  .on('end', printRecord)