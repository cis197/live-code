// declare a regular class
class Person {
  constructor (name) {
    this.name = name
  }

  greet = () => {
    console.log(`Hi, I am ${this.name}`)
  }
}

const bob = new Person('bob') // instantiate a new class
bob.greet() // call functions
console.log(bob.name) // access fields


// classes with Static methods
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance = (a, b) => {
    const dx = a.x - b.x
    const dy = a.y - b.y

    return Math.hypot(dx, dy)
  }

  printDistance = () => console.log(`x: ${this.x} y: ${this.y}`)
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
p1.printDistance()
console.log(Point.distance(p1, p2))


// private field
class Rectangle {
  #height = 0
  #width
  constructor(height, width) {    
    this.#height = height
    this.#width = width
  }

  // getter
  getHeight = () => this.#height
}

const rec1 = new Rectangle(5, 10)
console.log(rec1.height) // invalid
console.log(rec1.getHeight()) // valid