let executionsAmount = 0 

const sum = (a, b) => {
    executionsAmount++ // observable side effect
    return a + b
}

console.log(executionsAmount)
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(sum(98, 12))
console.log(executionsAmount)