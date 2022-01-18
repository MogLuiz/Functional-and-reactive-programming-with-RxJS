const x = 3


const outside = () => {
    const x = 10
    const sumXMore3 = () => x + 3

    return sumXMore3
}


module.exports = outside()