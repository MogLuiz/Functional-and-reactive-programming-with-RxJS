const awaitFor = (time = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() =>  resolve(), time)
    })
}

const returnValue = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

const fastReturnValue = async () => 20

const running = async () => {
    let value = await returnValue()
    let value2 = await fastReturnValue()

    await awaitFor(1500)
    console.log(`Async/Await ${value}...`)
    await awaitFor(1500)
    console.log(`Async/Await ${value + 1}...`)
    await awaitFor(1500)
    console.log(`Async/Await ${value + 2}...`)

    return value + 3
}

running().then(console.log)