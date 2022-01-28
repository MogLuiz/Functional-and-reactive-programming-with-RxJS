const numbersGenerate = () => {
    return {
        start(fn, interval = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, interval)

            return {
                stop() {
                    clearInterval(i)
                }
            }
        }
    }
}

const timer1 = numbersGenerate()
timer1.start(number => console.log(`#1: ${number * 2}`), 1000)

const timer2 = numbersGenerate()
timer2.start(number => console.log(`$2: ${number + 100}`), 2000)
