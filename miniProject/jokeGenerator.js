const chalk = require("chalk")
const https = require("https")
const url = 'https://official-joke-api.appspot.com/random_joke'
const createJoke = () => {
    https.get(url, (res) => {
        let row = ''
        res.on("data", (chunk) => {
            row += chunk
        })
        res.on('end', () => {
            const joke = JSON.parse(row)
            // console.log(joke);
            console.log(`here is ${joke.type} joke !`);
            console.log(chalk.default.red(`${joke.setup}`)); // chalk for colorful show text 
            console.log(chalk.default.bgBlue.red.bold(`${joke.punchline}`));

        })
        res.on("error", (err) => {
            console.log(`showing the error : ${err.message}`);

        })
    })
}
createJoke()