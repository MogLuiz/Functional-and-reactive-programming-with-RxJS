// Packages
const fs = require("fs")
const path = require("path")

const readDirectory = (way) => {
    let files = fs.readdirSync(way)
    return files.map(file => path.join(way, file))
}

module.exports = {
    readDirectory,
}