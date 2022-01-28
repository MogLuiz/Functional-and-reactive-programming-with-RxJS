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

getResponse("this is a test? ")
    .then(console.log)