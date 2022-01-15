const run = (fn, ...params) => {
    return function(initialText) {
        return `${initialText} ${fn(...params)}`
    }
}


const sum = (a, b, c) => a + b + c


const mult = (a, b) => a * b 


console.log(run(sum, 4, 5, 6)("O resultado da soma é :"))
console.log(run(mult, 4, 5)("O resultado da multiplicação é :"))