/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// Write a Person Constructor that initializes `name` and `age` from arguments.
function Person(name, age) {
  this.name = name
  this.age = age
  this.stomach = []
}
// Give instances of Person the ability to `.eat("someFood")`
Person.prototype.eat = function(edible) {
  if(this.stomach.length < 10) {
    this.stomach.push(edible)
  }
}
// Give instances of Person the ability to `.poop()`
Person.prototype.poop = function() {
  this.stomach = []
}
// Give instances of Person a method `.toString()`
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

const personOne = new Person('William', 21)
const personTwo = new Person('Grady', 33)
const personThree = new Person('Sally', 41)

console.log(personOne.toString())
console.log(personTwo.toString())
console.log(personThree.toString())

personTwo.eat('🍍')
personTwo.eat('🌽')
personTwo.eat('🌮')

console.log(personTwo.stomach)
personTwo.poop()
console.log(personTwo.stomach)

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
function Car(model, milesPerGallon) {
  this.model = model
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}
Car.prototype.fill = function(gallons) {
  this.tank += gallons
}
Car.prototype.drive = function(distance) {
  if((this.tank * this.milesPerGallon) < distance) {
    let leftover = distance - (this.tank * this.milesPerGallon)
    this.odometer += distance - leftover
    this.tank = 0
    return `I ran out of fuel at ${this.odometer} miles!}`
  } else {
    this.odometer += distance
    this.tank -= distance / this.milesPerGallon
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy
}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding (Window Binding)
      - value of this is window or console object
      - default if no context given, except when using strict where undefined is returned
  2. Implicit Binding
      - most common rule, about 80% of the time
      - only applies to objects with methods
      - `this` referes to whatever is left of dot
  3. New Binding
      - `this` points to `new` object
      - when a constructor function is used, `this` is referring to the object being created and returned by constructor function
  4. Explicit
      - uses
        - `.call` - will immediately invoke function / pass in arguments one by one
        - `.apply` - will immediately invoke function / pass in args as array
        - `.bind` - will NOT immediately invoke function / pass in args one by one
      - Whenever JavaScript's call or apply method is used, this is explicitly defined.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
