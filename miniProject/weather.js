// const readline = require("readline")
import readline from "readline/promises"
// const https = require("https")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const apiKey = '9f6290d6cda9a36a63755fadee71f83d'
const weatherInfo = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        const response = await fetch(url)
        // console.log(response);
        // console.log();
        if (!response.ok) throw new Error("please enter correct city name , in which sme thing is wrong ")
        const weatherData = await response.json();
        // console.log(weatherData);
        console.log("\nWaether Information !");
        console.log(`City : ${weatherData.name}`);
        console.log(`Temperature : ${weatherData.main.temp} C`);
        console.log(`Description : ${weatherData.weather[0].description}`);
        console.log(`Huminidity : ${weatherData.main.humidity} %`);
        console.log(`Wind speed : ${weatherData.wind.speed} m/s\n`);
    }
    catch (err) {
        console.log(err);
    }
}
const city = await rl.question("enter bthe city name : ")
await weatherInfo(city)
rl.close()