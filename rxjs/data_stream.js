const numbersGenerate = (fn) => {
    let num = 0
    setInterval(() => {
        fn(num++)
    }, 1000)
}

numbersGenerate(number => console.log(`#1: ${number * 2}`))
numbersGenerate(number => console.log(`$2: ${number + 100}`))