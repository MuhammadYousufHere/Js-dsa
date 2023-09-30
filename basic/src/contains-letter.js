function checkStrings(sourceString, testString) {
  var sourceString = sourceString.toLowerCase()
  var testString = testString.toLowerCase()
  for (let i = 0; i < testString.length; i++) {
    console.log(i)
    if (sourceString.indexOf(testString[i]) === -1) return false
  }
  return true
}

console.log(checkStrings('hello', 'hey'))
console.log(checkStrings('Mary', 'Army'))
