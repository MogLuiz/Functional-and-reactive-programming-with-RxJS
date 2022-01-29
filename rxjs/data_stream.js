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
const exec1 = timer1.start(number => console.log(`#1: ${number * 2}`), 1000)


const timer2 = numbersGenerate()
const exec2 = timer2.start(number => console.log(`$2: ${number + 100}`), 2000)

setTimeout(() => {
    exec1.stop()
    exec2.stop()
},10000)

