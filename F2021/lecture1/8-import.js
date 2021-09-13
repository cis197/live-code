// const x = require('./7-export')

const THINGSIWANTTOIMPORT = require('./7-export')

const { square, sum } = THINGSIWANTTOIMPORT


console.log(square(3))
console.log(sum(2, 3))
// console.log(THINGSIWANTTOIMPORT(3))
// console.log(x(3))