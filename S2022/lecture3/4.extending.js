class Animal { 
  constructor(name) {
    this.name = name
  }
  
  speak = () => console.log(`${this.name} makes a noise.`)

  eat = () => console.log(`${this.name} is eating.`)
}

class Dog extends Animal {
  constructor(name) {
    // call the super class constructor and pass in the name parameter
    super(name)
  }

  // overwrite functions in parent class
  speak = () => console.log(`${this.name} barks.`)
}

let d = new Dog('Mitzie')
d.eat() // Mitzie barks.