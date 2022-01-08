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