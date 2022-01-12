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

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(path, { encoding: "utf-8" })
            resolve(content)
        } catch(err) {
            reject(err)
        }
    })
}

const readFiles = () => {}

module.exports = {
    readDirectory,
    elementsEndingWith,
}