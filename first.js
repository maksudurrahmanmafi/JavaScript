// var a = prompt("Enter your Name : ");//use for only browser

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(name) {
  console.log("Hello " + name);
  rl.close();
});