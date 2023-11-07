import  inquirer  from "inquirer";
import chalk from "chalk";
const apiLink = "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple";

// fetching data
let fetchData =async (data:any) => {
    let fetchData = await fetch(data)
    let res = await fetchData.json()
    return res.results;
    
}


 let data =  await fetchData(apiLink)

 let startQuiz = async () => {
    let score:number = 0;
    //for user name
    let name = await inquirer.prompt({
        type : "input",
        name : "fname",
        message : "Please Enter Your Name : "
    })
    for(let i = 0 ; i < 5 ; i++){
        let answers = [...data[i].incorrect_answers , data[i].correct_answer]
        let ans = await inquirer.prompt({
            type : "list",
            name : "quiz",
            message : data[i].question,
            choices : answers.map(e => e)
        })
        if(ans.quiz == data[i].correct_answer){
            ++score
            console.log(chalk.bold.italic.blue("Correct"))
        }else{
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`)
        }
        
    }
    console.log(`Dear ${chalk.bold.italic.green(name.fname)},your score is ${chalk.bold.italic.red(score)} out of ${chalk.bold.red('5')}`)
 }
 startQuiz()

