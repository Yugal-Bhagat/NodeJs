const path = require("path")
console.log(__dirname);
console.log(__filename);

const filePath = path.join("folder","world","humans","child.txt")
console.log(filePath);
// const parseData = path.parse("./app.js")
const parseData = path.parse(filePath)
console.log(parseData);

const resolvedPath = path.resolve(filePath)
const extName = path.extname(filePath)
const baseName = path.basename(filePath)
const dirName = path.dirname(filePath)
const separator = path.sep
console.log({resolvedPath,extName,baseName,dirName,separator});


