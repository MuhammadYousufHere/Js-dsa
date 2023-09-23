// console.log(m) // cannot access error
// let m

// console.log(m) // undefined

// console.log(m) // undefined
// var m
// console.log(m) // undefined

var name // primitive values are immutable as they are passed around by values unlike refference as objects -  can be replaced but can't be altered directly and are compared by value.

function log() {
  name = 'Yousuf'
  var age = 30
  console.log(name)
}
log()
console.log(name)
// console.log(age) // age is not defined as it is decleared inside a function. functional scope.
