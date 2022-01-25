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

const composer = (...fns) => (value) => {
    return fns.reduce(async (acc, fn) => {
        if(Promise.resolve(acc) === acc) {
            return fn(await acc)
        } else {
            return fn(acc)
        }
    }, value)
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


const contentConcatenate = content => content.join(" ")


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
            return symbols.reduce((acc, symbol) => {
                return acc.split(symbol).join("")
            }, item)
        })
    } 
}


const separateByWords = allContent => allContent.split(" ")


const mergingWords = (words) => {
    return Object.values(words.reduce((fused, word) => {
        const wordLowerCase = word.toLowerCase()
        const quantity = fused[wordLowerCase] ? fused[wordLowerCase].quantity + 1 : 1
        fused[wordLowerCase] = {
            name: wordLowerCase,
            quantity
        } 
        return fused
    }, {}))
}


const sortByNumericAttribute = (attr, order = "asc") => {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(order === "asc" ? asc : desc)
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
    separateByWords,
    mergingWords,
    sortByNumericAttribute,
    composer,   
}