import { faker } from '@faker-js/faker';

import mysql from 'mysql2/promise';


// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Mustak@560',
});

// Correct: Using async/await
try {
  const [results, fields] = await connection.query("SHOW TABLES");
  console.log(results); // results contains rows returned by server
} catch (err) {
  console.log(err);
}
connection.end();
    //     username: faker.internet.username(), // before version 9.1.0, use userName()
    //     email: faker.internet.email(),
    //     avatar: faker.image.avatar(),
    //     password: faker.internet.password(),
    //     birthdate: faker.date.birthdate(),
    //     registeredAt: faker.date.past(),
    //   };
    // };

    // console.log(createRandomUser());


function getRandomUsers() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUsers());