const cart = [
    { name: "Pen",  quantity: 10, price: 7.99 },
    { name: "printer",  quantity: 0, price: 649.50 },
    { name: "Copybook",  quantity: 4, price: 27.10 },
    { name: "Pencil",  quantity: 3, price: 5.82 },
    { name: "Scissors",  quantity: 1, price: 19.20 },
]

const totalPrice = item => item.price * item.quantity
const sumTotal = (acc, el) => acc + el

const generalTotal = cart
                        .map(totalPrice)
                        .reduce(sumTotal)

console.log(generalTotal)

Array.prototype.myReduce = function(fn, initialValue) {
    let acc = initialValue
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this)
    }

    return acc
}

const generalTotal2 = cart
                        .map(totalPrice)
                        .myReduce(sumTotal)

console.log(generalTotal2)


const isPositive = cart.every(item => item.quantity >= 0)
console.log(isPositive)

const tchurma = [
    { id: 12, name: "Frederico", age: 17 },
    { id: 47, name: "Francisca", age: 16 },
    { id: 77, name: "Ramon", age: 48 },
    { id: 85, name: "Lennon", age: 20 },
]

console.log(tchurma.every(item => item.age >= 18))

const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) return false 
    }
    return value > 1
}

console.log(tchurma.some(item => isPrime(item.age)))