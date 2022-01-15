const numbers = [10, 8, 12, 4, 1, 3, 5]

// #1 - Dados Mutáveis
// let total = 0

// for(let i = 0; i < numbers.length; i++) {
//     total += numbers[i]
// }

// console.log(total)


// #2 - Reduce
// const sum = (a, b) => a + b
// const total = numbers.reduce(sum)
// console.log(total)


// #3 - Recursividade
const sumArray = (array, total = 0) => {
    if(array.length === 0) return total
    return sumArray(array.slice(1), total + array[0])
}

const total = sumArray(numbers)
console.log(total)