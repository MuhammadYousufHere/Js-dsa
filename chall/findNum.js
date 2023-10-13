// Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

// The output of the function should be 8
var arrayOfIntegers = [1, 2, 3, 5, 6]

function findMissingNum(list = []) {
  const n = list.length + 1
  if (n === 1) return 1
  let actualSum = 0
  for (let num of list) {
    actualSum += num
  }
  // formula  - n * (n - 1) / 2 - Guass
  const expectedSum = (n * (n + 1)) / 2
  return expectedSum - actualSum
}
console.log(findMissingNum(arrayOfIntegers))
