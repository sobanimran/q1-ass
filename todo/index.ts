import inquirer from "inquirer";
import { todo } from "node:test";
let condition :boolean = true
let todos : string[] =["task1","task2","task3","task4"]
async function createTodo (arr:string[]){
    do{
        let ans = await inquirer.prompt({
            type : "list",
            message: "select an operation",
            name : "select",
            choices : ["add" , "update" , "view" ,"delete","exit" ]
        })
        if(ans.select=="add"){
            let addtodo = await inquirer.prompt({
                type :"input",
                message: "Add item ...",
                name : "todo"
    
            })
            todos.push(addtodo.todo)
           console.log (todos)
        }
        if(ans.select=="update"){
            let updatetodo = await inquirer.prompt({
                type :"list",
                message: "Select todo to update",
                choices:todos.map(e=>e),
                name : "todo"
    
            })
            let addtodo = await inquirer.prompt({
                type :"input",
                message: "Add item ...",
                name : "todo"
    
            })
            let newtodos = todos.filter(e => e != updatetodo.todo)
            todos=[...newtodos ,addtodo.todo]
            console.log(todos)
        }
        if(ans.select=="view"){
        console.log(todos)
    
        }
        if(ans.select=="delete"){
            
        
            let deletetodo = await inquirer.prompt({
                type :"list",
                message: "Select todo to delete",
                choices:todos.map(e=>e),
                name : "todo"
    
            })
            todos = todos.filter(e => e != deletetodo.todo)
            console.log(todos)
        }
        if(ans.select=="exit"){
            condition = false        
        
        }
    }while(condition)
   
}
createTodo(todos)