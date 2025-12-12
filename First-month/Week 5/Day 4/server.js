const express = require("express");
const app = express();
app.use(express.json());


let users =[
    {id: 1, name : "Ritika", age : 22},
     {id: 2, name : "Anjali", age : 25}
]

app.get("/users", (req, res) => {
  res.status(200).json(users);
});


// Get  one user
app.get("/users/:id", (req, res) =>{
const user = users.find(u => u.id == req.params.id);

 if (!user) {
   return res.status(404).json({ error: "User not found" });
 }
   res.status(200).json(user);
});


// POST — Create user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

 if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
 }

 const newUser = {
 id : users.length + 1,
 name,
 age
 };

 users.push(newUser);
   res.status(201).json(newUser);
}); 


//PUT — Update user
app.put("/users/:id", (req, res) => {
 const user = users.find(u => u.id == req.params.id);

 if (!user) {
   return res.status(404).json({ error: "User not found" });
 }
   user.name = req.body.name || user.name;
   user.age = req.body.age || user.age;
   res.status(200).json(user);
});


// DELETE — Remove user
app.delete("/users/:id", (req, res) =>{
    users = users.filter(u => u.id != req.params.id);
    res.status(200).json({ message: "User deleted" });
});  

app.listen(5000,() =>{
    console.log("Server running on port 5000");
})