// declare a regular class
class Person {
  constructor (name) {
    this.name = name
  }

  greet = () => {
    console.log(`Hi, I am ${this.name}`)
  }

  repeat() {
    console.log(`I am ${this.name} ${this.name}`)
  }
}

const bob = new Person('bob')
// bob.greet()
bob.repeat()

