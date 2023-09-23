let nameIs = 'alone'

console.log(nameIs.split('').reverse().join(''))
console.log(nameIs.split('').reduce((prev, curr) => curr + prev, ''))
console.log(nameIs.split('').reduce((prev, curr) => curr.concat(prev), ''))
console.log([...nameIs].reverse().join(''))
console.log(Array.from(nameIs).reverse().join(''))
const op = 'Option B'

console.log(op.split(' ').join('-'))
console.log(nameIs.substring(1, 2)) //  as splice in arrays

let A = 10
