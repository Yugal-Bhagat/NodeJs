const fs = require('fs')
const data = require('./script')
console.log(data);
fs.appendFileSync('person.json',data)
