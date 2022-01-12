const numberGenerateEntry = (min, max, forbiddenNumbers) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        if(forbiddenNumbers.includes(random)) reject("Numero repetido")
        resolve(random)
    })
}

const megaSenaGenerate = async (numberQuantity) => {
    const numbers = []
    for(let _ of Array(numberQuantity).fill()) {
        numbers.push(await numberGenerateEntry(1, 60, numbers))
    }
    return numbers
}

megaSenaGenerate(8)
                    .then(console.log)
                    .catch(console.log)