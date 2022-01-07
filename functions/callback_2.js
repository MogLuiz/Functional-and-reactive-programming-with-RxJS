const fs = require("fs");
const path = require("path")

const way = path.join(__dirname, "data.txt")

const showContent = (err, content) => {
    console.log(content)
}

