const nums = [1, 2, 3, 4, 5]
const double = n => n * 2
console.log(nums.map(double))

const names = ["Ana", "Bia", "Gui", "Lia", "Rafa"]
const firstLetter = item => item[0]
const letter = names.map(firstLetter)
console.log(names, letter)

const cart = [
    { name: "Pen",  quantity: 10, price: 7.99 },
    { name: "printer",  quantity: 0, price: 649.50 },
    { name: "Copybook",  quantity: 4, price: 27.10 },
    { name: "Pencil",  quantity: 3, price: 2.50 },
    { name: "Scissors",  quantity: 1, price: 19.20 },
]

const getName = cart.map(item => item.name)
const totalPrice = cart.map(item => item.price * item.quantity)

console.log({getName, totalPrice})


// Building my own MAP method

Array.prototype.myMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
       result = fn(this[i], i, this) 
       mapped.push(result)
    }
    return mapped
}

const getNameWithMyMap = cart.myMap(item => item.name)
const totalPriceWithMyMap = cart.myMap(item => item.price * item.quantity)

console.log(getNameWithMyMap, totalPriceWithMyMap)