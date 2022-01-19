function sum(a, b, c){
    return a + b + c
}

// console.log(sum(1, 2, 4))

function sumWithCurrying(a) {
    return function (b) {
        return function(c) {
            return a + b + c
        }
    }
}

// console.log(sumWithCurrying(10)(20)(30))

const textWithSizeBetween = (min, max, error, text) => {
    const size = (text || "").trim().length

    if(size < min || size > max) {
        throw error
    }

}

const p1 = { name: "A", price: 14.99, desc: 0.25 }
textWithSizeBetween(4, 244, "Invalid Name!", p1.name)