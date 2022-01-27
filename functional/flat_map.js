const letters = [
    "O", "l", "á", 
    " ",
    "M", "u", "n", "d", "o",
    "!", "!", "!"
]

const result = letters
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b)

console.log(result)