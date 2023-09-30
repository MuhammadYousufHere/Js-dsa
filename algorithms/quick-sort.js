// D&C - recursive
function quickSort(list = []) {
  // base case
  if (list.length < 2) return list
  let pivotIndx = Math.floor(list.length / 2)
  let piviot = list[pivotIndx]
  let gtArr = []
  let ltArr = []
  for (const i in list) {
    if (i != piviot) {
      list[i] > piviot
        ? gtArr.push(list[Number(i)])
        : ltArr.push(list[Number(i)])
    }
  }
  return [...quickSort(ltArr), piviot, ...quickSort(gtArr)]
}
console.log(quickSort([3, 6, 0, 2, 1]))
