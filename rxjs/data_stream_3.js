const { interval } = require("rxjs")

const generateNumber = interval(500)


generateNumber.subscribe(num => console.log(Math.pow(2, num)))