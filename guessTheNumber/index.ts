import chalk from "chalk";
import inquirer from "inquirer";

let genNum = Math.floor(Math.random() * 5)

let user = await inquirer.prompt({
    name : 'usrNum',
    type : "list",
    message : "Please Select a number between 1-5 ",
    choices : ['0','1','2','3','4','5']
})
if(genNum == parseInt(user.usrNum) ){
console.log(chalk.bold.blueBright("Congratulation You Won"))
}else{
    console.log(chalk.bold.redBright(`Sorry Better Luck next Time ! \n Random Genrated Number is ${genNum}`))

}