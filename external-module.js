// ===============================
// External Modules Example
// ===============================



// ===============================
// Moment package (date & time)
// ===============================

const moment = require("moment");

// Get current date & time
const time = moment().format(); 
// Example: moment().format("YYYY-MM-DD")

// console.log(time);

// Run code every 5 seconds
setInterval(() => {
  // const time = moment().format();
  // console.log("Time:", time);
}, 5000);



// ===============================
// Inquirer package (user input)
// ===============================

// const inquirer = require("inquirer");

// Ask user for input
// inquirer
//     .prompt([{type: "input", name: "name", message: "Enter your name"}])
//     .then(answer => {
//         console.log("Name that I entered", answer.name)
//     })
//     .catch((err)=> console.log(err));



// ===============================
// Validator package (validation)
// ===============================

const validator = require("validator");

// Check different data types
const checkEmail = validator.isEmail("alan@gmail.com");
const checkInteger = validator.isInt("22");
const checkIP = validator.isIP("114.111.33.222");

// console.log("Is email:", checkEmail);     // true
// console.log("Is integer:", checkInteger); // true
// console.log("Is IP:", checkIP);           // true



// ===============================
// UUID package (unique IDs)
// ===============================

// const { v4: uuidv4 } = require("uuid");

// Generate unique ID
// const uid = uuidv4();
// console.log(uid);



// ===============================
// Chalk package (terminal colors)
// ===============================

const chalk = require("chalk");

// Print blue colored text in the terminal
console.log(chalk.blue("Hello World!"));

// Examples of other styles:
// console.log(chalk.green("Success message"));
// console.log(chalk.red("Error message"));
// console.log(chalk.yellow.bold("Warning message"));
// console.log(chalk.bgBlue.white("Highlighted text"));