const { faker } = require('@faker-js/faker');

import mysql from 'mysql2/promise';


// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'mustak@560',
});



    // let createRandomUser = () => {
    //   return {
    //     userId: faker.string.uuid(),
    //     username: faker.internet.username(), // before version 9.1.0, use userName()
    //     email: faker.internet.email(),
    //     avatar: faker.image.avatar(),
    //     password: faker.internet.password(),
    //     birthdate: faker.date.birthdate(),
    //     registeredAt: faker.date.past(),
    //   };
    // };

    // console.log(createRandomUser());


let getRandomUsers = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

console.log(getRandomUsers());
