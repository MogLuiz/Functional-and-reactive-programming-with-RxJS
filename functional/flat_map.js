const letters = [
    ["O",[ "l"], "á"], 
    [" "],
    ["M", ["u", ["n"]], "d", "o"],
    ["!", "!", "!"]
]

const flatLetters = letters.flat(Infinity)


const result = flatLetters
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b)


const result2 = flatLetters
    .flatMap(l => [l, ","])
    .reduce((a, b) => a + b)

console.log(result)
console.log(result2)