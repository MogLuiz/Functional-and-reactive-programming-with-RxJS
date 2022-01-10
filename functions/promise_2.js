setTimeout(() => {
    console.log("Running callback1...")

    setTimeout(() => {
        console.log("Running callback2...")

        setTimeout(() => {
            console.log("Running callback3...")   
        }, 2000)   
    }, 2000)
}, 2000)


const awaitFor = (time = 2000) => {
    return new Promise((resolve) => {
        console.log("Awaiting Promise...")
        setTimeout(() => {
            resolve(["Luiz", "Henrique"])
        }, time)
    })
}

awaitFor()
    .then(() => awaitFor())
    .then(awaitFor)