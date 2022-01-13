const emotion = '😃'
const str = `Template literals You make me ${emotion} It is snowing on Mt. Fuji.`
console.log(str)

// you can put ANYTHING inside the ${}
const square = x => x * x

console.log(`the square of 3 is ${square(3)}`)
// console.log('the square of 3 is ' + square(3))

const obj = { 'name': 'peter' }
console.log(`this is an obj ${obj['name']}`)

const ls = [1,2,3,4]
console.log(`this is an obj ${ls}`)
