const prompt = require("prompt-sync")();

let firstInput = parseInt(prompt("Insert your first number: "));
let secondInput = parseInt(prompt("Insert your second number: "));

let addition = firstInput + secondInput;
console.log(addition);
