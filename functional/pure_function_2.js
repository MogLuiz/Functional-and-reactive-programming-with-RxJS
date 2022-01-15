const generateRandomNumber = (min, max) => {
    const factor = max - min + 1
    return parseInt(Math.random() * factor) + min
}

console.log(generateRandomNumber(1, 60))
console.log(generateRandomNumber(1, 60))
console.log(generateRandomNumber(1, 60))
console.log(generateRandomNumber(1, 60))
console.log(generateRandomNumber(1, 60))