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


const elementsEndingWith = (standardText) => (array) => array.filter(item => item.endsWith(standardText))


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


const contentConcatenate = content => content.join("\n")


const separateByLines = allContent => allContent.split("\n")


const readFiles = (ways) => {
    return Promise.all(ways.map(way => readFile(way)))
}


const removeElementsIfEmpty = (array) => array.filter(item => item.trim())


const removeIfDontIncludesStandardText = (standard) => {
    return (array) => {
        return array.filter(item => !item.includes(standard))
    }
}


const removeIfJustNumber = (array) => {
    return array.filter(item => {
        const number = parseInt(item.trim())
        return !(number !== 0 && !!number)
    })
}


const removeSymbols = (symbols) => {
    return function(array) {
        return array.map((item) => {
            let textWithoutSymbols = item
            symbols.forEach((symbol) => {
                textWithoutSymbols = textWithoutSymbols.split(symbol).join("")
            })
            return textWithoutSymbols
        })
    } 
}


module.exports = {
    readDirectory,
    elementsEndingWith,
    readFile,
    readFiles,
    removeElementsIfEmpty,
    removeIfDontIncludesStandardText,
    removeIfJustNumber,
    removeSymbols,
    contentConcatenate,
    separateByLines,   
}