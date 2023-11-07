import { differenceInSeconds } from 'date-fns';
import inquirer from 'inquirer';

const res =  await inquirer.prompt({
    type : "number",
    name : "user_input",
    message :"Kindly set the timer :",
    validate : (e)=>{
        if(isNaN(e)){
           return "Enter valid number" 
        }else if(e > 120){
            return "counter limit is 120 sec or 2 minute" 

        }else{
            return true;
        }
    }
})
function startTime(val:number){
    const iniTime = new Date().setSeconds(new Date().getSeconds() +val)
    const intervalTime = new Date(iniTime)
    setInterval(()=>{
        const currentTime = new Date()
        const timeDiffr = differenceInSeconds(intervalTime , currentTime)
        if (timeDiffr <= 0){
            console.log("Timer has Expired...")
            process.exit()
        }
        const min = Math.floor((timeDiffr % (3600*24))/3600)
        const sec = Math.floor(timeDiffr % 60)
        console.log(`${min.toString().padStart(2 ,"0")} : ${sec.toString().padStart(2 ,"0")}`)
    },1000)
}
let val = res.user_input
startTime(val)

