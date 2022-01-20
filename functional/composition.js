const composer = (...fns) => (value) => {
    return fns.reduce((acc, fn) => {
        return fn(acc)
    }, value)
}

const shout = (text) => text.toUpperCase()

const emphasize = (text) => `${text}!!!!`

const result = composer(
    shout,
    emphasize
)("Para")

console.log(result)