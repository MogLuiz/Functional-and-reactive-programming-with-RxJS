const composer = (...fns) => (value) => {
    return fns.reduce((acc, fn) => {
        return fn(acc)
    }, value)
}

const composer2 = (fn1, fn2, fn3) => (value) => {
    return fn3(fn2(fn1(value)))
}

const shout = (text) => text.toUpperCase()
const emphasize = (text) => `${text}!!!!`
const slowDown = (text) => text.split("").join(" ")

const result = composer2(
    shout,
    emphasize,
    slowDown
)("Para")

console.log(result)