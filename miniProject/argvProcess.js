console.log(process.argv);
const arg = process.argv.slice(2)
console.log(arg);
const name = arg[0] || 'user'
console.log(`hello ${name} wellcome to my course!`);
