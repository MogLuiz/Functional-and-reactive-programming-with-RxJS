const cart = [
    { name: "Pen",  quantity: 10, price: 7.99 },
    { name: "printer",  quantity: 0, price: 649.50 },
    { name: "Copybook",  quantity: 4, price: 27.10 },
    { name: "Pencil",  quantity: 3, price: 2.50 },
    { name: "Scissors",  quantity: 1, price: 19.20 },
]

const filterQuantityGreaterZero = item => item.quantity > 0
const getName = item => item.name

const validItems = cart
                    .filter(filterQuantityGreaterZero)
                    .map(getName)

console.log(validItems)

Array.prototype.myFilter = function(fn) {
    const filtered = []
    for(let i = 0; i < this.length; i++) {
      if( fn(this[i], i, this) ) filtered.push(this[i])
    }
    return filtered
}

const validItems2 = cart
                    .myFilter(filterQuantityGreaterZero)
                    .map(getName)

console.log(validItems2)