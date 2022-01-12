// Packages
const path = require("path")

// Utils
const fn = require("./utils/functions")

const way = path.join(__dirname, "..", "data", "legends")

const files = fn.readDirectory(way)

console.log(files)