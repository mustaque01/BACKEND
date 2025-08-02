const express = require('express');
const app = express();
// middle ware ka kaam hota hai ki  next function ko call karna
// app.use((req, res, next) => {
//   // let { query } = req.query;
//   // console.log("Query parameters:", query); 
//   // Middleware logic can be added here
//   console.log("Middleware is running...");
//   next();
// });

// // define second middleware
// app.use((req, res, next) => {
//   console.log("Second middleware is running...");
//   next();
//   // next ke baad code na likhe ye achhe coder ki nishani hai
//   // ye next ki jagar return next(); likhna chahiye
//   return next();
// });

// utility middleware use kia
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// 404 middleware
// app.use((req, res, next) => {
//   res.status(404).send("404 Not Found");
// }); 

app.use((req, res, next) => {
 let { token } = req.query;
 if (token === "giveaccess") {
   next();
 } else {
  throw new Error("ACCESS DENIED");
 }
});

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/api', (req, res) => {
  res.send("data");
});

app.get ('/random', (req, res) => {
  res.send(" this is a Random Page!");
});

app.listen(8080, () => {
  console.log("Listening on port 8080...");
});