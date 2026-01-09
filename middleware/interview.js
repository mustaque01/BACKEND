// What is Bcrypt used for?
//Bcrypt is a password hashing function which is used to securely hash and store user passwords

// install: npm install bcrypt
const bcrypt = require('bcrypt');

async function demo() {
  const password = 'SuperSecret123!';
  const saltRounds = 10;

  // Hash
  const hash = await bcrypt.hash(password, saltRounds);
  console.log('Hash:', hash);

  // Verify (compare)
  const isMatch = await bcrypt.compare(password, hash);
  console.log('Password matches?', isMatch);

  // Wrong password example
  const wrongMatch = await bcrypt.compare('wrong', hash);
  console.log('Wrong password matches?', wrongMatch);
}

demo().catch(console.error);




//18. What is meant by Scaffolding in ExpressJS?
//Scaffolding in ExpressJS refers to the process of generating a basic project structure automatically. This can speed up the initial setup and help maintain consistency in the way projects are structured, especially in large teams.




//27. How would you render plain HTML using ExpressJS?
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); // public/index.html, etc.

app.listen(3000);

//using res.sendFile

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});