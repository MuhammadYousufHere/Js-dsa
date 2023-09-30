// diffrence b/w Map and Objects in js is that you can you any of data type as key.

const myMap = new Map()
myMap.set('Mary', { fullname: 'Mary Jane', age: 19 })

const mary = myMap.get('Mary')
myMap.set({ bulger: true }, { fullname: 'Ormand Bulger', age: 1000 })

console.log(myMap)

// all data types map
const keyToFind = ['Hello']

const varMap = new Map([
  [1, 'Yousuf'],
  ['name', 'Ali'],
  [false, 'yes'],
  [keyToFind, 'World'],
  [{ name: true }, { fullname: 'Ahmed Ali' }],
])
console.log(varMap)
console.log(varMap.get(1)) // Ali
console.log(varMap.get('name')) // Ali
console.log(varMap.get(false)) // yes
console.log(varMap.get(JSON.stringify(keyToFind))) //
console.log(varMap.keys())
