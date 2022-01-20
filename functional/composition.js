const composer = (...fns) => (value) => {
    return fns.reduce((acc, fn) => {
        return fn(acc)
    }, value)
}

const shout = (text) => text.toUpperCase()
const emphasize = (text) => `${text}!!!!`
const slowDown = (text) => text.split("").join(" ")

const result = composer(
    shout,
    emphasize,
    slowDown
)("Para")

console.log(result)