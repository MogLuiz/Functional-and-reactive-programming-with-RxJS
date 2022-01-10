const numberGenerateEntry = (min, max, time) => {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, time)
    })
}

const manyNumbersGenerate = () => Promise.all([
    numberGenerateEntry(1, 60, 4000),
    numberGenerateEntry(1, 10, 1000),
    numberGenerateEntry(1, 5, 400),
    numberGenerateEntry(1, 3, 1000),
])