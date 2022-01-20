const eager = (a, b) => {
    const end = Date.now() + 2500
    while(Date.now() < end) {}

    const value = Math.pow(a, 3)
    return value + b
}

console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))