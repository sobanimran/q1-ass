import chalk from "chalk"
import inquirer from "inquirer"

// currency convertet api link
let apiLink = "https://v6.exchangerate-api.com/v6/7a8311f71eed9910e4fb6b8f/latest/PKR"
// fetching data
let fetchData =async (data:any) => {
    let fetchData = await fetch(data)
    let res = await fetchData.json()
    return res.conversion_rates;
    
}

let data = await fetchData(apiLink)
// object to array
let countries = Object.keys(data)
// user input first country
let firstcountry =  await inquirer.prompt({
    type:"list",
    name:"name",
    message:"converting From : ",
    choices : countries,
})
//first country money 
let userMoney =  await inquirer.prompt({
    type:"number",
    name:"money",
    message:`please enter the amount in ${chalk.greenBright.bold(firstcountry.name)} `,
    
})
// convert country 
    let secondcountry =  await inquirer.prompt({
        type:"list",
        name:"name",
        message:"Converting To : ",
        choices : countries,
    })

    // conversion rate
    let cnv = `https://v6.exchangerate-api.com/v6/7a8311f71eed9910e4fb6b8f/pair/${firstcountry.name}/${secondcountry.name}`
    
    // fetching data for conversion rate
    let cnvData =async (data:any) => {
    let cnvData = await fetch(data)
    let res = await cnvData.json()
    return res.conversion_rate;
    
}
let rate  = await cnvData(cnv)
let result = userMoney.money*rate
console.log(`your ${chalk.greenBright.bold(userMoney.money)} ${chalk.greenBright.bold(firstcountry.name)} in ${chalk.greenBright.bold(secondcountry.name)} is ${chalk.greenBright.bold(result)} `)
    
