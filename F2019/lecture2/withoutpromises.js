
function getUserFromDatabase(userId, cb){
  setTimeout(function(){
    var obj = {
      firstname: 'Nihar',
      lastname: 'Patil',
      petId: 4
    }

    cb(null, obj)
  }, 1000)
}

function getPetFromDatabase(petId, cb){
  setTimeout(function(){
    var obj = {
      name: 'rover'
    }
    cb(obj)
  }, 1000)
}

function savePet(petObj, cb) {
  setTimeout(function(){
    // saved pet to database
    cb()
  }, 1000)
}


var userId = 1234


getUserFromDatabase(userId, function(error, userObj){

  if (error != null) {
    // handle the error
  }
  console.log('got user')

  var myPetId = userObj.petId

  getPetFromDatabase(myPetId, function(petObj){
    console.log('got the pet')

    petObj.name = 'gina'

    savePet(petObj, function(){
      console.log('changed pet name')
    })
  })
})




