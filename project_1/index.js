// Packages
const path = require("path")

// Utils
const fn = require("./utils/functions")

const way = path.join(__dirname, "..", "data", "legends")

const symbols = [
    ".", "?", "-", ",", "", "♪",
    "_", "<i>", "</i>", "\r", "[",
    "]", "(", ")"
]

fn.readDirectory(way)
    .then(fn.elementsEndingWith(".srt"))
    .then(fn.readFiles)
    .then(fn.contentConcatenate)
    .then(allContent => allContent.split("\n"))
    .then(fn.removeElementsIfEmpty)
    .then(fn.removeIfDontIncludesStandardText("-->"))
    .then(fn.removeIfJustNumber)
    .then(fn.removeSymbols(symbols))
    .then(console.log)
