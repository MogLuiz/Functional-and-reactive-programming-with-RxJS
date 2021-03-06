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

const otherEventInterestedOBSERVER = (event) => {
    setTimeout(() => {
        console.log("S: Monitorando o barulho")
        console.log(`S: ${event.resp}`)
        console.log(`S: ${event.date}`)
    }, 2000)
}

const eventDetectSUBJECT = async (interestings) => {
    while(true) {
        const response = await getResponse("A namorada chegou? (s/N/q) ")
        if(response.toLowerCase() === "s") interestings?.forEach(interesting => interesting({ response, date: Date.now() }))
        if(response.toLowerCase() === "q") break
    } 
}


eventDetectSUBJECT([otherEventInterestedOBSERVER, eventInterestedOBSERVER])