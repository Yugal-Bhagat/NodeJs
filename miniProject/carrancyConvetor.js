const https = require("https")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const apiKey = 'e5d7f606cdf8eda6f19cb72a'
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
https.get(url, (res) => {     // with the help of res you should listen three event like data,end,error
    let row = ''
    res.on('data', (chunk) => {
        row += chunk
    })
    res.on('end', () => {
        // const data= JSON.parse(row) 
        const data = JSON.parse(row).conversion_rates
        console.log(data);
        // const currancyConvert = () => {
        //     rl.question("\nEnter amount in USD : ", (amount) => {
        //         rl.question("Entere the target currancy (eg INR, NPR, EUR) : ", (currancy) => {
        //             const rate = data[currancy.toUpperCase()]
        //             if (rate) {
        //                 console.log(`${amount} USD in ${(amount * rate).toFixed(2)} ${currancy.toUpperCase()}`);
        //             }
        //             else {
        //                 console.log("invalid currancy !");
        //             }
        //             rl.close()
        //         })
        //     })
        // }
        const currancyConvert = () => {
            rl.question("\nEnter the curranacy (eg INR, NPR, EUR) : ", (curr) => {
                rl.question("enter the amount : ", (amount) => {
                    rl.question("Entere the target currancy (eg INR, NPR, EUR) : ", (tarCurrancy) => {
                        const rate = data[curr.toUpperCase()]
                        const tarRate = data[tarCurrancy.toUpperCase()]
                        // console.log(rate);
                        // console.log(tarRate);

                        if (rate && tarCurrancy) {
                            const convertedAmount = calculateCurranacy(rate, amount, tarRate).toFixed(2);
                            console.log(`${amount} ${curr.toUpperCase()} in ${convertedAmount} ${tarCurrancy.toUpperCase()}`);
                        }
                        else {
                            console.log("invalid currancy !");
                        }
                        rl.close()
                    })
                })

            })
        }
        const calculateCurranacy = (rate, amount, tarRate) => {
            return amount * (tarRate / rate)
        }
        currancyConvert()
    })
    res.on("error", (err) => {
        console.log(`in which the error : ${err}`);

    })
})