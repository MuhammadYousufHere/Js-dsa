export const countOcurr = (str = '', char = '') => {
  let count = 0
  str.split('').map((letter) => {
    if (letter === char) {
      count++
    }
  })
  return count
}

export const countOccurence = (str, char) => str.split(char).length - 1
