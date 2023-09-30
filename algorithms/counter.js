function counter(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i)
  }
}

counter(10)

// using recursion - when a function calls itself.
// should have a base case (stop). and a recursive case (continue).
function reCounter(n) {
  // base case -
  console.log(n)
  if (n === 10) {
    return
  }
  return reCounter(n + 1)
}

reCounter(0)

// Recurrion
// no performance boost but easier to understand when we know the base case.

/*  Question */
// find the  number 3 such that is can be nested. and return the string yes/ no.
const items = [
  [24, 535, 24],
  [23, 2, 5],
  [3, 43, [3]],
]
/**
 * @param {number[][]} arr - An array of arrays, where each inner array contains numbers.
 * @param {number} n - n is the number that we are looking for
 * */
const findNumb = (arr, n) => {
  let hasNum = 'no!'
  arr.forEach((item) => {
    if (item === n) {
      hasNum = 'yes!'
    }
    // both works
    // if (Array.isArray(item)) {
    //   // Recursively search within the inner array
    //   if (findNumb(item, n) === 'yes!') {
    //     hasNum = 'yes!'
    //   }
    // }
    if (Array.isArray(item)) {
      console.log('is array', true)
      hasNum = findNumb(item, n)
    }
  })
  return hasNum
}
console.log(findNumb(items, 3))
