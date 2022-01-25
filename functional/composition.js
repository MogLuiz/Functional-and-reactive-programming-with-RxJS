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

const exaggerated = composer(
    shout,
    emphasize,
    slowDown
)

const aLittleLessExaggerated = composer(
    shout,
    emphasize
)

const result2 = exaggerated("Para")
const result22 = aLittleLessExaggerated("Para")
const result3 = exaggerated("Cuidado piso molhado!")
const result33 = aLittleLessExaggerated("Cuidado piso molhado!")

console.log(result)
console.log(result2)
console.log(result22)
console.log(result3)
console.log(result33)