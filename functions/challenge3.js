const fs = require("fs");
const path = require("path")

const way = path.join(__dirname, "data.txt")

const readFileWithPromise = (way) => {
    return new Promise(resolve => {
        fs.readFile(way, (_, content) => resolve(content.toString()))
    })
}

readFileWithPromise(way).then(console.log)