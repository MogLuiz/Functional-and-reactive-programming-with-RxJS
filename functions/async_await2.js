const numberGenerateEntry = (min, max, forbiddenNumbers) => {
    if(min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const random = parseInt(Math.random() * (max - min + 1)) + min
        if(forbiddenNumbers.includes(random)) reject()
        resolve(random)
    })
}