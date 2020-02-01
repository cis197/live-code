

var p = new Promise(function(resolve, reject){
  //some async code happens
  setTimeout(function(){
    resolve({name: 'gina'})
  }, 1000)

})

p
.then(function(petObj){
  console.log(petObj)
  return new Promise(function(res,rej){
    setTimeout(function(){
      res(petObj.name)
    },1000)
  })
})
.then(function(petsName){
  console.log(petsName)
})
.then(function(){

})
.catch(function(error){
  console.log(error)
})
.then(function(){

})