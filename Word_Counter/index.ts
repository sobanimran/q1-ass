import inquirer from 'inquirer'


function counter (text : string){
    let remSp = text.replace(/\s/g,"")
    return remSp.length;
}
async function value() {
    let res = await inquirer.prompt({
        type :"input",
        message :"write paragraph or word to calculate their length ",
        name :"data"
    })
    console.log(counter(res.data))
}
value()