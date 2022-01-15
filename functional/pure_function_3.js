let executionsAmount = 0 

const sum = (a, b) => {
    executionsAmount++
    return a + b
}

console.log(executionsAmount)
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(executionsAmount)