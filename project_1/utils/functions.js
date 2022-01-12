// Packages
const fs = require("fs")
const path = require("path")

const readDirectory = (way) => {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(way)
            files = files.map(file => path.join(way, file))
            resolve(files)
        } catch(err) {
            reject(err)
        }
    })
}

const elementsEndingWith = (array, standard) => array.filter(item => item.endsWith(standard))

module.exports = {
    readDirectory,
    elementsEndingWith,
}