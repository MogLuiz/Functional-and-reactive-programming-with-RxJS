const awaitFor = (time = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() =>  resolve(), time)
    })
}


const running = async () => {
    await awaitFor(1500)
    console.log("Async/Await 1...")
    await awaitFor(1500)
    console.log("Async/Await 1...")
    await awaitFor(1500)
    console.log("Async/Await 1...")
}

running()