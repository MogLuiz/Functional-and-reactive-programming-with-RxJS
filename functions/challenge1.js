// Challenge 1
const soma = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(soma(2)(5)(10))