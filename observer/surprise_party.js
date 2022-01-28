const readline = require("readline")

const getResponse = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise(resolve => {
       rl.question(question, response => {
        resolve(response)
        rl.close()
       }) 
    })
}

const eventInterestedOBSERVER = () => {
    setTimeout(() => {
        console.log("N: Apagar as luzes")
        console.log("N: Pedir Silêncio")
        console.log("N: Supriseeeee!!!")
    }, 2000)
}


getResponse("this is a test? ")
    .then(console.log)