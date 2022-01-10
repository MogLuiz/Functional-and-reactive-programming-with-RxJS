const numberGenerateEntry = (min, max) => {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        resolve(random)
    })
}

const numberMutipliesByTen = number => number * 10
const manipulingResponseText = number => `O número gerado multiplicado por 10 foi ${number}`

numberGenerateEntry(1, 10)
                    .then(numberMutipliesByTen)
                    .then(manipulingResponseText)
                    .then(console.log)