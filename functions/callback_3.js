const nums = [1, 2, 3, 4, 5]
const double = n => n * 2
console.log(nums.map(double))

const names = ["Ana", "Bia", "Gui", "Lia", "Rafa"]
const firstLetter = item => item[0]
const letter = names.map(firstLetter)
console.log(names, letter)

const cart = [
    { nome: "Pen",  quantity: 10, price: 7.99 },
    { nome: "printer",  quantity: 0, price: 649.50 },
    { nome: "Copybook",  quantity: 4, price: 27.10 },
    { nome: "Pencil",  quantity: 3, price: 2.50 },
    { nome: "Scissors",  quantity: 1, price: 19.20 },
]