const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
}

const Schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
