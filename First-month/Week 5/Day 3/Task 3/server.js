import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample users data
const users = [
  { id: 1, name: "Ritika", age: 20 },
  { id: 2, name: "Anjali", age: 22 },
  { id: 3, name: "Muskan", age: 21 },
];

// 1. GET /
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home Page" });
});

// 2. GET /about
app.get("/about", (req, res) => {
  res.json({ message: "This is the About Page" });
});

// 3. POST /contact
app.post("/contact", (req, res) => {
  res.json({ message: "This is the Contact Page" })
});

// 4. GET /api/user
app.get("/api/user", (req, res) => {
  res.json({ id: 1, name: "Ritika", age: 20 });
});

// 5. GET /users/:id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find(u => u.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// 6. GET /api/users/search?name=ritika
app.get("/api/users/search", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Please provide a name to search" });
  }

  const result = users.filter(u =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json({
    message : "Search result",
    searchName : name
  });
});

// cStart the server
app.listen(2000, () => {
  console.log('Server running on 2000');
});
