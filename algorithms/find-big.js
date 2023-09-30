// SelectionSort

function findLarge(list) {
  let big = list[0]
  let lrgIndex = 0

  for (let i = 0; i <= list.length; i++) {
    if (big < list[i]) {
      big = list[i]
      lrgIndex = i
    }
  }
  return lrgIndex
}
const selectionSort = (list = []) => {
  const sorted = []
  while (list.length) {
    bigInd = findLarge(list)
    // push the large in arr of sorted
    sorted.unshift(list[bigInd]) // assending
    // sorted.push(list[bigInd]) // assending

    // remove from the list too.
    list.splice(bigInd, 1)
  }
  return sorted
}
console.log(findLarge([2, 35, 64, 65, 0, 75, 7, 4446]))
console.log(selectionSort([2, 35, 64, 65, 0, 75, 7, 4446]))
