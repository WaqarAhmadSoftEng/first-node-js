// 2ND TASK
const fs = require("fs")

// Write file
fs.writeFileSync("example.txt", "Hello from Node.js!");

// Read file
const data = fs.readFileSync("example.txt", "utf8");
console.log("File content:", data);

// Append file
fs.appendFileSync("example.txt", "\nMore text added!");

// Delete file
//fs.unlinkSync("example.txt");