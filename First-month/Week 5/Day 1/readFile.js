const fs = require("fs");

fs.readFile("student.txt", "utf-8" ,(err,data)=>{
    if (err) throw err;
     console.log("File content:", data);
});