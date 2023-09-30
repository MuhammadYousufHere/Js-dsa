const findMissingLetter = (arr = ['']) => {
  let start = arr[0].charCodeAt(0)
  for (let i = 0; i < arr.length; i++) {
    const currLetter = arr[i].charCodeAt(0)
    // if the differece is gt 1.
    if (currLetter - start > 1) {
      //that is the missing letter
      return String.fromCharCode(start + 1)
    }

    start = currLetter
  }
  return ''
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
