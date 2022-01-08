const nums = [1, 2, 3, 4, 5]
const double = n => n * 2
console.log(nums.map(double))

const names = ["Ana", "Bia", "Gui", "Lia", "Rafa"]
const firstLetter = item => item[0]
const letter = names.map(firstLetter)
console.log(names, letter)