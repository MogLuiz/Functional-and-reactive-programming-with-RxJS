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

console.log(sumWithCurrying(10)(20)(30))