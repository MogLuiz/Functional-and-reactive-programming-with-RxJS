const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const generateElement = (array) => {
    return {
        start(fn) {
            let index = 0
            const i = setInterval(() => {
                if(index >= array.length - 1) clearInterval(i)
                fn(array[index])
                index++
            }, 1000)
    
            return {
                stop() {
                    clearInterval(i)
                }
            }
        }
    }
}

const timer1 = generateElement(numbers)
const exec1 = timer1.start(num => console.log(Math.pow(2, num)))

setTimeout(() => exec1.stop(), 4000)

generateElement([["Luizin", "do", "grau"], ["Lucas", "Souza"], [10, 24, 631]])
    .start(console.log)