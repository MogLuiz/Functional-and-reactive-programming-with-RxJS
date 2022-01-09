const cart = [
    { name: "Pen",  quantity: 10, price: 7.99, fragility: true },
    { name: "printer",  quantity: 1, price: 649.50, fragility: true },
    { name: "Copybook",  quantity: 4, price: 27.10, fragility: false },
    { name: "Pencil",  quantity: 3, price: 5.82, fragility: false },
    { name: "Scissors",  quantity: 1, price: 19.20, fragility: true },
]


const result = cart
                .filter(item => item.fragility)
                .map(item => item.price * item.quantity)
                .reduce((acc, el) => {
                    const newQuantity = acc.quantity + 1
                    const newTotal = acc.total + el
                    return {
                        quantity: newQuantity,
                        total: newTotal,
                        average: newTotal / newQuantity
                    }
                }, { quantity: 0, total: 0,  average: 0 }).average

console.log(result)  