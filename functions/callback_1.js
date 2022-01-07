function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (a, b) => console.log(a + b)
const subtrairNoTerminal = (a, b) => console.log(a - b)

exec(somarNoTerminal, 10, 13)
exec(subtrairNoTerminal, 10, 13)


setInterval(() => {
    console.log("exec...")
},1000)