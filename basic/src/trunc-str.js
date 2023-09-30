function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, num - 3) + '...'
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...'
  } else {
    return str
  }
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 11))
function truncStr(str = '', by = 0) {
  if (str.length > by && by > 3) {
    return str.slice(0, by - 3).padEnd(by, '...')
  }
}
console.log(truncStr('a quick brown fox', 4))
