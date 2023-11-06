class School {
    name : string;
    students:Student[] =[];
    techers:Teacher[] =[];
    addStudent(stdObj:Student){
        this.students.push(stdObj)
    }
    addTeacher(teachObj:Teacher){
        this.techers.push(teachObj)
    }
    constructor(name:string){
        this.name=name;
    }
}
class Student {
    name:string;
    schoolName:string;
    age:number;
    constructor(name:string,age:number,schName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schName;

    }
}

class Teacher extends Student {}
//creating school-class object
let school1 = new School("APS")
let school2 = new School("FIC")


//genrating student recoard
let std1 = new Student("Bilal",16,school1.name)
let std2 = new Student("moiz",14,school2.name)
let std3 = new Student("mubeen",17,school1.name)

//genrating teacher recoard
let t1 = new Teacher("suman",35,school1.name)
let t2 = new Teacher("huzafa",29,school2.name)
let t3 = new Teacher("mubashir",25,school1.name)


// add student
school1.addStudent(std1)
school1.addStudent(std3)
school2.addStudent(std2)
// add teacher
school1.addTeacher(t1)
school1.addTeacher(t3)
school2.addTeacher(t2)


console.log(school1)
console.log(school2)