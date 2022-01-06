// Challenge 1
const soma = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(soma(2)(5)(10))

// Challenge2
const somaChallenge2 = (a, b) => a + b

const receiveValueA = (a) => (b) => (fn) => fn(a,b)
    

const result = receiveValueA(1)(1009)(somaChallenge2)
console.log(result)