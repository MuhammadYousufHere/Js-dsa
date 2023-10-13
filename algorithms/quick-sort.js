// D&C - recursive
function quickSort(list = []) {
  // base case
  if (list.length < 2) {
    return list
  }
  let pivotIndx = Math.floor(list.length / 2)
  let piviot = list[pivotIndx]
  let gtArr = []
  let ltArr = []
  for (let i in list) {
    if (i != pivotIndx) {
      list[i] > piviot ? gtArr.push(list[i]) : ltArr.push(list[i])
    }
  }
  return [...quickSort(ltArr), piviot, ...quickSort(gtArr)]
}

function quickSort2(array) {
  if (array.length <= 1) {
    return array
  }

  let pivotIndx = Math.floor(array.length / 2)
  const pivot = array[pivotIndx]
  const leftArray = array.filter((el) => el < pivot)
  const rightArray = array.filter((el) => el > pivot)

  return [...quickSort2(leftArray), pivot, ...quickSort2(rightArray)]
}
console.log(quickSort([3, 6, 0, 2, 1]))
console.log(quickSort2([2, 1, 4, 5, 9, 22, 11, 6, 55, 3]))
