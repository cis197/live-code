const expensiveOperation = () => {
  setTimeout(() => {
    console.log('i am expensive')
  }, 5000)
}


const async = () => {
  console.log('first')
  expensiveOperation()
  console.log('second')
}

async() // -> how about now?


setTimeout(() => {
  console.log('woah')
}, 2)

let x = 1
while (x < 10000000000) {
  x = x + 1
}
console.log(x)

// USED FOR THE CALLBACK DEMO
// var a = function() {
//   console.log('first');
//   setTimeout(function() { 
//     console.log('i was running late');
//   }, 3000);
//   setTimeout(function() { 
//     console.log('i was running late for 10 sec');
//   }, 10000);
//   console.log('second');
//   console.log('third');
//   console.log('fourth');
// };
// a();