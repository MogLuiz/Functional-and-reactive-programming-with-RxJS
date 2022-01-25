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

const startingPoint = fn.composer(
    fn.readDirectory,
    fn.elementsEndingWith(".srt"),
    fn.readFiles,
    fn.contentConcatenate,
    fn.separateByLines,
    fn.removeElementsIfEmpty,
    fn.removeIfDontIncludesStandardText("-->"),
    fn.removeIfJustNumber,
    fn.removeSymbols(symbols),
    fn.contentConcatenate,
    fn.separateByWords,
    fn.removeElementsIfEmpty,
    fn.removeIfJustNumber,
    fn.mergingWords,
    fn.sortByNumericAttribute("quantity", "desc"),
)

startingPoint(way).then(console.log)

