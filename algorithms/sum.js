const sum = (list) => {
  let total = 0
  for (const num of list) {
    total += num
  }
  return total
}
// recursive - first in last out.
// are nice b/c they keep returning a new state after each fn.
const reSum = (list = []) => {
  // base case
  if (list.length === 0) {
    return 0
  }

  return list[0] + reSum(list.slice(1))
}
console.log(reSum[[2, 35, 64, 65, 0, 75, 7, 4446]])

console.log(sum([2, 35, 64, 65, 0, 75, 7, 4446]))
