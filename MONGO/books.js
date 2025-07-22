const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

async function main() {
    await mongoose.connect('mongodb://localhost:27017/amazon');
}

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: Date,
    genre: String
});

const Book = mongoose.model('Book', BookSchema);


let book1 = new Book({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedDate: new Date('1925-04-10'),
    genre: 'Fiction'
});
let book2;

book2 = new Book({
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedDate: new Date('1960-07-11'),
    genre: 'Fiction'
});

book1.save()
    .then(() => console.log('Book 1 saved'))
    .catch(err => console.error('Error saving Book 1:', err));

book2.save()
    .then(() => console.log('Book 2 saved'))
    .catch(err => console.error('Error saving Book 2:', err));

    