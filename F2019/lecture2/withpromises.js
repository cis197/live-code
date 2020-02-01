
function getUserFromDatabase(userId){
  return new Promise(function(res,rej){
    setTimeout(function(){
      var obj = {
        firstname: 'Nihar',
        lastname: 'Patil',
        petId: 4
      }
  
      res(obj)
    }, 1000)
  })
}

function getPetFromDatabase(petId){
  return new Promise(function(res,rej){
    setTimeout(function(){
      var obj = {
        name:'rover'
      }
  
      res(obj)
    }, 1000)
  })
}

function savePet(petObj) {
  return new Promise(function(res,rej){
    setTimeout(function(){
      res()
    }, 1000)
  })
}


var userId = 1234

// getUserFromDatabase(userId)
// .then(function(userObj){
//   console.log('got user')
//   return getPetFromDatabase(userObj.petId)
// })
// .then(function(petObj){
//   console.log('got pet')
//   return savePet(petObj)
// })
// .then(function(){
//   console.log('completed')
// })
// .catch(function(error){
//   console.log(error)
// })

Promise.all([
  getUserFromDatabase(1234),
  getPetFromDatabase(16)
])
.then(function(arr){
  console.log(arr)
})
