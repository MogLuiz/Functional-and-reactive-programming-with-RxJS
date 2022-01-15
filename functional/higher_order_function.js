const run = (fn, ...params) => fn(...params)


const sum = (a, b, c) => a + b + c


const mult = (a, b) => a * b 


console.log(run(sum, 4, 5, 6))
console.log(run(mult, 4, 5))