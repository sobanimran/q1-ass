import inquirer from "inquirer";
import { faker } from '@faker-js/faker'
import chalk from 'chalk'
// ********* USERS
interface User {
    id : number
    pin : number
    name : string
    fname : string
    accountNum :number
    balance : number
}

const createUser = (qty:number) => {
    let users :User[] =[]
    for(let i = 0 ; i <= qty ; i++){
        let user:User={
           id : i,
           pin : 1000 + i,
           name : faker.person.firstName(),
           fname : faker.person.lastName(),
           accountNum : Math.floor(Math.random() * 900000000),
           balance : 1000000 * i
        }
        
        users.push(user)
    }
    return users
}
const users = createUser(7)


// ******** ATM MAHINE
const atmMachine = async (users:User[]) => {
const res = await inquirer.prompt({
    type : "number",
    message : "Write Pin code",
    name : "pin"
})

const user = users.find( e => e.pin == res.pin)
if(user){
    console.log(chalk.bold.blueBright(`Welcome ${user.name +' '+ user.fname} !`))
    atmFunc(user)
    return
}else{
    console.log(chalk.bold.redBright(`Invalid Pin `))

}

};

//**** ATM FUNTION */

const atmFunc = async  ( user : User ) => {
    const ans = await inquirer.prompt({
        type : "list",
        message : "Select one of the following action .. ",
        name: "select",
        choices:['Withdraw' , 'Balance' , 'exit' , 'Deposit']
    })
    if(ans.select == 'Withdraw'){
        const amount = await inquirer.prompt({
            type : "number",
            message : "Enter amount ",
            name: "money"
        })
        if(amount.money >25000){
          return  console.log(chalk.bold.redBright(`You can only Withdraw with in 25000`))
        }
        else if(amount.money >user.balance){
          return  console.log(chalk.bold.redBright(`Insufficient Balance .. \n you have is  ${user.balance} Rs`))
        }
        console.log(chalk.bold.greenBright(`Withdraw amount :  ${amount.money}`))
        console.log(chalk.bold.blueBright(`balance :  ${user.balance-amount.money}`))
    }
    if(ans.select == 'Balance'){
        return console.log(chalk.bold.greenBright(`Withdraw amount :  ${user.balance}`))
    }
    if(ans.select == 'exit'){
        return console.log(chalk.bold.redBright(`Thanks ${user.name}..you are log out successfully ! `))

    }
    if(ans.select == 'Deposit'){
        const amount = await inquirer.prompt({
            type : "number",
            message : "Enter amount ",
            name: "money"
        })
        if(amount.money >25000){
          return  console.log(chalk.bold.redBright(`You can not deposit more than 25000`))
        }
        else if(amount.money == 0){
          return  console.log(chalk.bold.redBright(`you are not deposit any money \n your balance is ${user.balance}`))
        }
        console.log(chalk.bold.greenBright(`Deposit amount :  ${amount.money}`))
        console.log(chalk.bold.greenBright(`privous balance:  ${user.balance}`))
        console.log(chalk.bold.blueBright(`balance :  ${user.balance + amount.money}`))
    }
}

console.log(atmMachine(users))