import chalk from "chalk";
import inquirer from "inquirer";
let condition = true;
// classes player opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = 100;
        this.fuel = fuel;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name : "
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent : ",
    choices: ["zombie", "skeleton", "Assassin"]
});
let p1 = new Player(player.name);
let op1 = new Opponent(opponent.select);
console.log(`${chalk.bold.greenBright(p1.name)} VS ${chalk.bold.greenBright(op1.name)}`);
do {
    // skeleton
    if (opponent.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " : ",
            choices: ["Attack", "Drink Portion", "Run For you life", "exit"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num == 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel} `));
                console.log(chalk.bold.green(`${op1.name} Fuel is ${op1.fuel} `));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
                    condition = false;
                }
            }
            if (num == 1) {
                op1.fuelDecrease();
                console.log(chalk.bold.redBright(`${op1.name} Fuel is ${op1.fuel} `));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel} `));
                if (op1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.name} you win the game`));
                    condition = false;
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${p1.name} you drink health portion your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For you life") {
            console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
            p1.fuel = 100;
            op1.fuel = 100;
        }
        if (ask.opt == "exit") {
            condition = false;
        }
    }
    // Assassian
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " : ",
            choices: ["Attack", "Drink Portion", "Run For you life", "exit"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num == 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel} `));
                console.log(chalk.bold.green(`${op1.name} Fuel is ${op1.fuel} `));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
                    condition = false;
                }
            }
            if (num == 1) {
                op1.fuelDecrease();
                console.log(chalk.bold.redBright(`${op1.name} Fuel is ${op1.fuel} `));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel} `));
                if (op1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.name} you win the game`));
                    condition = false;
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${p1.name} you drink health portion your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For you life") {
            console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
            p1.fuel = 100;
            op1.fuel = 100;
        }
        if (ask.opt == "exit") {
            condition = false;
        }
    }
    // Zombie
    if (opponent.select == "zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: " : ",
            choices: ["Attack", "Drink Portion", "Run For you life", "exit"]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            // console.log(num)
            if (num == 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.redBright(`${p1.name} Fuel is ${p1.fuel} `));
                console.log(chalk.bold.green(`${op1.name} Fuel is ${op1.fuel} `));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
                    condition = false;
                }
            }
            if (num == 1) {
                op1.fuelDecrease();
                console.log(chalk.bold.redBright(`${op1.name} Fuel is ${op1.fuel} `));
                console.log(chalk.bold.green(`${p1.name} Fuel is ${p1.fuel} `));
                if (op1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(`${p1.name} you win the game`));
                    condition = false;
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${p1.name} you drink health portion your Fuel is ${p1.fuel} `));
        }
        if (ask.opt == "Run For you life") {
            console.log(chalk.bold.italic.red(`${p1.name} you lose better try next time`));
            p1.fuel = 100;
            op1.fuel = 100;
        }
        if (ask.opt == "exit") {
            condition = false;
        }
    }
} while (condition);
