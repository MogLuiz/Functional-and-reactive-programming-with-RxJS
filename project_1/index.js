// Packages
const path = require("path")

// Utils
const fn = require("./utils/functions")

const way = path.join(__dirname, "..", "data", "legends")

fn.readDirectory(way)
    .then(files => fn.elementsEndingWith(files, ".srt"))
    .then(filesSRT => fn.readFiles(filesSRT))
    .then(console.log)
