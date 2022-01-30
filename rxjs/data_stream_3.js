const { interval } = require("rxjs")

const generateNumber = interval(500)


const sub1 = generateNumber.subscribe(num => console.log(Math.pow(2, num)))

sub1.unsubscribe()