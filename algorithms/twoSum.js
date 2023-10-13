// TWO SUM

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (arr = [], target = 0) => {
  const output = new Set()
  for (let ind = 0; ind <= arr.length - 1; ind++) {
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] + arr[ind] === target) {
        if (!output.has([arr[i], arr[ind]])) {
          output.add([arr[i], arr[ind]])
        }
      }
    }
  }
  return output
}
console.log(twoSum([2, 7, 11, 15], 9))
