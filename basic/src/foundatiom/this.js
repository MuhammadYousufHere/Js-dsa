'use strict'

console.log('outside', this)
const val = this
function callmeX() {
  console.log({ val })
  console.log('inside function', this)
}
callmeX()

const callMeMrX = (a) => {
  console.log('inside =>', this)
  const value = this
  return function (b) {
    console.log('insde arr func', this)
    console.log({ value })
    console.log(a + b)
  }
}

callMeMrX(1)(2)
