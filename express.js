import express from "express";
const app = express();
// 1st task
// ek route
app.get("/", (req, res) => {
    res.send("Hello Express Server 🚀");
  });

// 2nd task
// GET
  app.get("/users", (req, res) => {
    res.send("Ali, 'Ahmad', 'Waqar'");
  });
  
  // POST
  app.post("/users", (req, res) => {
    res.send("New User Created");
  });
  
  // PUT
  app.put("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} Updated`);
  });
  
  // DELETE
  app.delete("/users/:id", (req, res) => {
    res.send(`User ${req.params.id} Deleted`);
  });

 // 3rd task
  
  
  // server run
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });