const express = require('express');
const app = express();

const port = 8080;


app.set('view engine', 'ejs');
app.get ('/', (req, res) => {
  res.render('home.ejs', { title: 'Home Page' });
});


app.listen (port, () => {
  console.log(`listening on port ${port}`);
});