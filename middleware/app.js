const express = require('express');
const app = express();
// middle ware ka kaam hota hai ki  next function ko call karna
app.use((req, res) => {
  let { query } = req.query;
  console.log("Query parameters:", query); 
  // Middleware logic can be added here
  console.log("Middleware is running...");
  res.send("Middleware response");
});

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get ('/random', (req, res) => {
  res.send(" this is a Random Page!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});