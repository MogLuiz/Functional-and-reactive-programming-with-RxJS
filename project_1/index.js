// Packages
const path = require("path")

// Utils
const fn = require("./utils/functions")

const way = path.join(__dirname, "..", "data", "legends")

fn.readDirectory(way)
    .then(files => fn.elementsEndingWith(files, ".srt"))
    .then(fn.readFiles)
    .then(content => content.join("\n"))
    .then(allContent => allContent.split("\n"))
    .then(fn.removeElementsIfEmpty)
    .then(fn.removeIfDontIncludesStandardText("-->"))
    .then(fn.removeIfJustNumber)
    .then(console.log)
