
function goodMorning() {
    console.log("Good Morning")
}

const goodAfternoon = function () {
    console.log("Good Afternoon")
}

function runningAnything(fn) {
    if(typeof fn === "function") fn()
}

runningAnything(goodMorning)
runningAnything(goodAfternoon)

// Return a function from another function

function potency(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potency2 = potency(2)
console.log(potency2(8))

const pot34 = potency(3)(4)
console.log(pot34)
