// 1ST TASK
// console.log('Hello Sir');

// const math = require("./math");
// // for addition
// console.log(math.add(2, 3));
// // for subtraction
// console.log(math.sub(2, 3));
// // for multiplication
// console.log(math.mul(2, 3));
// // for divission
// console.log(math.dev(2, 3));

// 2ND TASK
const fs = require("fs")

// // Write file
// fs.writeFileSync("example.txt", "Hello from Node.js!");

// // Read file
// const data = fs.readFileSync("example.txt", "utf8");
// console.log("File content:", data);

// // Append file
// fs.appendFileSync("example.txt", "\nMore text added!");

// Delete file
fs.unlinkSync("example.txt");