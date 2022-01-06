
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