// Packages
const fs = require("fs")

const readDirectory = (way) => {
    let files = fs.readdirSync(way)
    console.log(files)
}

module.exports = {
    readDirectory,
}