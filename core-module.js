// -------------------- Module Packages --------------------
// There are 3 types of modules in Node.js:
// 1. Core Modules (built-in, no installation needed)
// 2. External Modules (installed using npm)
// 3. File / Custom Modules (created by the developer)


// -------------------- Core Module Example --------------------
// Core modules do NOT need to be installed
// They only need to be imported using `require()`

// Core modules: core packages (fs, path),
// core functions (e.g., setInterval()),
// and core objects (e.g., Math.random())




// -------------------- setTimeout --------------------
// Runs the function ONLY ONCE after a given delay
// Time is in milliseconds (5000ms = 5 seconds)

setTimeout(function(){
    // console.log("run");
}, 5000);



// -------------------- setInterval --------------------
// Runs the function REPEATEDLY every given interval
// Time is in milliseconds (1000ms = 1 second)

let number = 0;

setInterval(function(){
    // console.log("calculation:", number);
    // number++
}, 1000);



// -------------------- File System (fs) Module --------------------
// `fs` is a CORE module used to work with files
const fs = require("fs")

// -------------------- Read File --------------------
// readFileSync() reads the file content synchronously
// "utf8" converts the buffer data into readable text

const data = fs.readFileSync("./index.txt", "utf8");
console.log(data);


console.log("============")


// -------------------- Write File --------------------
// writeFileSync() writes data to the file
// If the file already exists, it will be overwritten

fs.writeFileSync("./index.txt", `${data} \n\t\t by Alan`); 

// -------------------- Read Updated File --------------------
// Reading the file again to confirm changes

const newData = fs.readFileSync("./index.txt", "utf8");
console.log(newData);