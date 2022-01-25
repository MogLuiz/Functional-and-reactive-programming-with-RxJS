const composer = (...fns) => (value) => {
    return fns.reduce(async (acc, fn) => {
        if(Promise.resolve(acc) === acc) {
            return fn(await acc)
        } else {
            return fn(acc)
        }
    }, value)
}


const shout = (text) => text.toUpperCase()
const emphasize = (text) => `${text}!!!!`
const slowDown = (text) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.split("").join(" "))
        },3000)
    })
}


const exaggerated = composer(
    shout,
    emphasize,
    slowDown
)

const aLittleLessExaggerated = composer(
    shout,
    emphasize
)

exaggerated("Para").then(console.log)
aLittleLessExaggerated("Cuidado com o piso molhado").then(console.log)
