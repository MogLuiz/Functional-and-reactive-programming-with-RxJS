// Essa função está causando um efeito colateral no meu Array original
const sorting = (array) => array.sort()

// Essa função não está causando um efeito colateral no meu Array original.
// Ela está retornando um novo Array.
const sortingNoSideEffect = (array) => [...array].sort()

const numbers = [3, 1, 7, 9, 4, 6]
const numbers2 = Object.freeze([3, 1, 7, 9, 4, 6])

sorting(numbers)
sortingNoSideEffect(numbers2)

// console.log(numbers)
const numbersOrdening = sortingNoSideEffect(numbers2)
console.log(numbers2, numbersOrdening)