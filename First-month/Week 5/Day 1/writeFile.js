// Write File
const fs = require("fs");

fs.writeFile("student.txt", "Welcome to Node.js!", (err) => {
    if (err) throw err;
    console.log("File written Successfully!");
});
