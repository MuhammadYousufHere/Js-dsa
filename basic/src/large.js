function largestOfFour(mainArray) {
  return mainArray.map(function (subArray) {
    return Math.max.apply(null, subArray)
  })
}
function largest(arr) {
  var largestNumber = [0, 0, 0, 0]
  for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for (
      var subArrayIndex = 0;
      subArrayIndex < arr[arrayIndex].length;
      subArrayIndex++
    ) {
      if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex]
      }
    }
  }
  return largestNumber
}

console.log(
  largestOfFour([
    [2, 54545, 24, 4223],
    [3123, 21, 4, 42],
    [3123, 21, 123134, 4312],
    [3123, 21, 123134, 4313212],
    [3123, 21, 4, 41232],
  ])
)
