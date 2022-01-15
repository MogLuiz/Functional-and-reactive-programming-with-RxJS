// Packages
const path = require("path")

// Utils
const fn = require("./functions")

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
    .then(fn.separateByLines)
    .then(fn.removeElementsIfEmpty)
    .then(fn.removeIfDontIncludesStandardText("-->"))
    .then(fn.removeIfJustNumber)
    .then(fn.removeSymbols(symbols))
    .then(fn.contentConcatenate)
    .then(fn.separateByWords)
    .then(fn.removeElementsIfEmpty)
    .then(fn.removeIfJustNumber)
    .then(fn.mergingWords)
    .then(fn.sortByNumericAttribute("quantity", "desc"))
    .then(console.log)
