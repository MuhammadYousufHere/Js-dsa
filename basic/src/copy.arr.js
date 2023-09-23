let vowelsArr = ['a', 'e', 'i', 'o', 'u']
let vowelsObj = [{ 1: 'a' }, { 2: 'e' }, { 3: 'i' }, { 4: 'o' }, { 5: 'u' }]

// basically for arrays
for (let vowel of vowelsArr) {
  console.log(vowel)
}
// for objects
for (let vowel in vowelsArr) {
  console.log(vowel)
}

// ------------
console.clear()
// iterated over keys
for (let vowel in vowelsObj) {
  console.log(vowelsObj[vowel])
}
const sleep = (timeout) => new Promise((r) => setTimeout(r, timeout))
console.clear()
async function* foo() {
  yield 1
  yield 2
}
;(async function () {
  for await (const num of foo()) {
    sleep(1000)
    console.log(num)
  }
})()
