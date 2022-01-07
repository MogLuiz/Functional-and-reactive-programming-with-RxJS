const fs = require("fs");
const path = require("path")

const way = path.join(__dirname, "data.txt")


const showContent = (_, content) => {
    console.log(content.toString())
}

console.log("started")
fs.readFile(way, {}, showContent)
fs.readFile(way, (_, content) => console.log(content.toString()))
console.log("end")

console.log("Sync started")
const content = fs.readFileSync(way)
console.log(content.toString())
console.log("Sync end")