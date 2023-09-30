const obj = { name: 'Yousuf' }

for (const key in obj) {
  console.log(key)
}

const create = Object.create(obj)
const entries = Object.entries(obj)
const assign = Object.freeze(Object.assign({}, obj))
const sealed = Object.seal(Object.assign({}, obj))
const de = Object.isExtensible(assign) // check if an object can be extended
console.log(Object.isExtensible(sealed))

console.log(de)
console.log(create)
console.log(entries)
console.log(assign)

assign.name = 'Ammar'
assign.age = 23
console.log(assign)
sealed.name = 'dd'
sealed.age = 10

console.log(sealed)
