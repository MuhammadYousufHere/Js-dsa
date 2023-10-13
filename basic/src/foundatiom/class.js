// Class
// 1 - polymorphism (many forms) -  different classes can be used with the same interface but can provide its own implementation
// 2 - Abstraction - hide the major implementation details
// 3 - Inheritance - inheriting the interface of another class
// 4 - Encapsulation - binds together the data and functions that manipulate the data,

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  get getName() {
    console.log(this.name)
  }
  set setName(name) {
    this.name = name
  }
}
class Portal extends Person {
  constructor(name, age) {
    super(name, age)
  }
  printUser() {
    this.getName
  }
}
const me = new Person('Muhammad', 23)
const portal = new Portal('Ali Khan', 33)
me.getName
console.log({ me })
me.setName = 'Ahmed'
console.log(me.name)
me.getName

portal.printUser()
