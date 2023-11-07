import  inquirer  from "inquirer";

inquirer

class Student {
    name :string;
    
    constructor(name:string){
        this.name = name
    }
}

class Person {
    student :Student[]=[]
    addStudent(obj:any){
        this.student.push(obj)
    }
}
const person = new Person()

const programStart = async (person:Person) => {
    do{
    console.log("Welcome Guest ..")
    const ans = await inquirer.prompt({
        type : "list",
        message : "Kindly chose a person to talk",
        choices : ["self","student","exit"],
        name : "select"
    })
    if(ans.select == "self"){
        console.log("Hellow i am talkin to myself")

    }
    if(ans.select == "exit"){
        console.log("hope you enjoy the meatting")
        process.exit()

    }
    if(ans.select == "student"){
        const ans = await inquirer.prompt({
            type : "input",
            message : "kindly tell the name of the student : ",
               name : "stdent"
        })
        const student = person.student.find(e => e.name = ans.stdent)
        if(!student){
            const name = new Student(ans.stdent)
            person.addStudent(name)
            console.log(`hello i am ${name.name}, i am good`)
            console.log(person.student)
        }
        if(student){
            console.log(`hello i am ${student.name}, i am good....`)
            console.log(person.student)
            
        }
        
    }
}while(true)
}
programStart(person)
