const cart = [
    { name: "Pen",  quantity: 10, price: 7.99, fragility: true },
    { name: "printer",  quantity: 1, price: 649.50, fragility: true },
    { name: "Copybook",  quantity: 4, price: 27.10, fragility: false },
    { name: "Pencil",  quantity: 3, price: 5.82, fragility: false },
    { name: "Scissors",  quantity: 1, price: 19.20, fragility: true },
]

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

const isFragility = item => item.fragility
const getTotal = item => item.price * item.quantity
const getAverage = (acc, el) => {
    const newQuantity = acc.quantity + 1
    const newTotal = acc.total + el
    return {
        quantity: newQuantity,
        total: newTotal,
        average: newTotal / newQuantity
    }
}
const initialAverage = { quantity: 0, total: 0,  average: 0 }

const result = cart
                .filter(isFragility)
                .map(getTotal)
                .myReduce(getAverage, initialAverage)

console.log(result)  