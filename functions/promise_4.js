const numberGenerateEntry = (min, max, time) => {
    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, time)
    })
}