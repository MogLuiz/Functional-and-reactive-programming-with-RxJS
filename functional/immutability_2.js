const numbers = [10, 8, 12, 4, 1, 3, 5]

// #1 - Dados Mutáveis
// let total = 0

// for(let i = 0; i < numbers.length; i++) {
//     total += numbers[i]
// }

// console.log(total)


// #2 - Reduce
const sum = (a, b) => a + b
const total = numbers.reduce(sum)
console.log(total)