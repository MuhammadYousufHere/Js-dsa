//1. With splice method

function slasher(arr = [], howMany) {
  arr.splice(0, howMany)
  return arr
}
console.log(slasher([1, 2, 3], 2))

// 2. With slice method

function slasher2(arr = [], howMany) {
  return arr.slice(howMany)
}
console.log(slasher2([23, 34, 5, 2, 52, 6, 3], 3))
