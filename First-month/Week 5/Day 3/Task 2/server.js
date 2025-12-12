const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
 res.send("Express API is working...");
});

app.get("/about", (req, res) => {
 res.send("This is the About page!");
});

app.post("/contact", (req, res) => {
 res.send("Contact form submitted!");
});


app.get("/api/user", (req,res)=>{
   res.json({
      id : 1,
      name : "Ritika",
       role: "Intern",
       skills: ["Node.js", "Express.js", "Git"]

   });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});