"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let n1 = parseInt(prompt('Please enter your first number : '));
let n2 = parseInt(prompt('Please enter your second number : '));
let opr = prompt('Please enter your operator ( + , - , * , / ) :  ');
switch (opr) {
    case '+':
        console.log(`The answer is ${n1} ${opr} ${n2} = ${n1 + n2}`);
        break;
    case '-':
        console.log(`The answer is ${n1} ${opr} ${n2} = ${n1 - n2}`);
        break;
    case '*':
        console.log(`The answer is ${n1} ${opr} ${n2} = ${n1 * n2}`);
        break;
    case '/':
        console.log(`The answer is ${n1} ${opr} ${n2} = ${n1 / n2}`);
        break;
    default:
        console.log(`kindly enter correct operator `);
}
