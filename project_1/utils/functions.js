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

const elementsEndingWith = (array, standardText) => array.filter(item => item.endsWith(standardText))

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

const readFiles = (ways) => {
    return Promise.all(ways.map(way => readFile(way)))
}

const removeIfEmpty = (array) => array.filter(item => item.trim())

const removeIfDontIncludesStandardText = (array, standard) => array.filter(item => !item.includes(standard))

module.exports = {
    readDirectory,
    elementsEndingWith,
    readFile,
    readFiles,
    removeIfEmpty,
    removeIfDontIncludesStandardText,   
}