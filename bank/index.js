import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
// creating classes
class Customer {
    constructor(firstname, lastname, mobileNumber, accNumber, gender, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.accNumber = accNumber;
        this.mobileNumber = mobileNumber;
        this.gender = gender;
        this.age = age;
    }
}
class Bank {
    constructor() {
        this.customers = [];
        this.accounts = [];
    }
    addCustomer(obj) {
        this.customers.push(obj);
    }
    addAccNum(obj) {
        this.accounts.push(obj);
    }
    transcationMethod(obj) {
        let newAccount = this.accounts.filter(e => e.accNumber != obj.accNumber);
        this.accounts = [...newAccount, obj];
    }
}
let myBank = new Bank();
//customer genrate
for (let i = 1; i <= 6; i++) {
    let fname = faker.person.firstName('male');
    let lname = faker.person.lastName();
    let num = faker.phone.number();
    const cus = new Customer(fname, lname, num, 1000 + i, 'male', 20 + i);
    myBank.addCustomer(cus);
    myBank.addAccNum({
        accNumber: cus.accNumber,
        balance: 178 * i
    });
}
// bank functionality
async function bankservices(bank) {
    do {
        let services = await inquirer.prompt({
            type: "list",
            message: "kindly select the service ..",
            choices: ["view Balance", "cash withdraw", "Cash Deposit", "exit"],
            name: "select"
        });
        // view balance
        if (services.select == "view Balance") {
            let res = await inquirer.prompt({
                type: "input",
                message: "please enter your account number :",
                name: "num"
            });
            let account = myBank.accounts.find(e => e.accNumber == res.num);
            if (!account) {
                console.log(chalk.bold.italic.red("Invalid account number"));
            }
            if (account) {
                let name = myBank.customers.find(e => e.accNumber == account?.accNumber);
                console.log(chalk.bold.italic.red(`Dear ${name?.firstname + ' ' + name?.lastname} ! your Accoun balance is ${account.balance} $`));
            }
        }
        //cash withdraw
        if (services.select == "cash withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                message: "please enter your account number :",
                name: "num"
            });
            let account = myBank.accounts.find(e => e.accNumber == res.num);
            if (!account) {
                console.log(chalk.bold.italic.red("Invalid account number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "please enter amount :",
                    name: "money"
                });
                if (ans.money > account.balance) {
                    console.log(chalk.bold.italic.green(`your have not suffeicient balance your balance is ${account.balance}`));
                }
                else {
                    let oldBalance = account.balance;
                    let newBalance = account.balance - ans.money;
                    // transection method
                    myBank.transcationMethod({
                        accNumber: account.accNumber,
                        balance: newBalance
                    });
                    console.log(chalk.bold.italic.green(`${ans.money} money dedacted from ${oldBalance} your new balance is ${newBalance}`));
                }
            }
        }
        // cash deposit
        if (services.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                message: "please enter your account number :",
                name: "num"
            });
            let account = myBank.accounts.find(e => e.accNumber == res.num);
            if (!account) {
                console.log(chalk.bold.italic.red("Invalid account number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "please enter amount :",
                    name: "money"
                });
                let oldBalance = account.balance;
                let newBalance = account.balance + ans.money;
                // transection method
                myBank.transcationMethod({
                    accNumber: account.accNumber,
                    balance: newBalance
                });
                console.log(chalk.bold.italic.green(`${ans.money} money added in ${oldBalance} your new balance is ${newBalance}`));
            }
        }
        if (services.select == "exit") {
            console.log(chalk.bold.italic.red(`hope you enjoy the system ... you are out !`));
            process.exit();
        }
    } while (true);
}
bankservices(myBank);
