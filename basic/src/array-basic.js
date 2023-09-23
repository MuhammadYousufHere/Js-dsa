let vowels = ['a', 'e', 'i', 'o', 'u']

// slice and splice

// splice - mutable method
console.log(vowels.splice(vowels.length - 2, 1, 'x')) // 0 based index - removes and inserts at that place (if needed) - returns deleted
console.log(vowels.splice(-2, 1, 'x')) // 0 based index - removes and inserts at that place (if needed) - returns deleted
console.log(vowels)
console.log(vowels.length)
console.log(vowels.length - 2)
console.clear()

// Slice
// immutable method -  returns a copy -- takes start(included) to end (not included)
// if end index is greater just returns all remainings
console.log(vowels.slice(0, 2))
