const numbersGenerate = () => {
    let num = 0
    setInterval(() => {
        console.log(num++)
    }, 1000)
}

numbersGenerate()