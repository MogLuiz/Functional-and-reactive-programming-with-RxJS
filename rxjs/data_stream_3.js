const { interval, from } = require("rxjs")

const generateNumber = interval(500)


const sub1 = generateNumber.subscribe(num => console.log(Math.pow(2, num)))
const sub2 = generateNumber.subscribe(console.log)

setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)

from([1, 3, 5, 7, 8]).subscribe(console.log)