const fs = require("fs");
const path = require("path")

const way = path.join(__dirname, "data.txt")

const readFileWithPromise = (way) => {
    return new Promise(resolve => {
        fs.readFile(way, (_, content) => resolve(content.toString()))
        console.log("Awaiting read file...")
    })
}

const linesSplit = (file) => file.split("\n")
const lineJoin = (text) => text.join(",")
const textReturn = (text) => `O valor final é: ${text}`

readFileWithPromise(way)
                    .then(linesSplit)  
                    .then(lineJoin)  
                    .then(textReturn)  
                    .then(console.log)