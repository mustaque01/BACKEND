//MongoDB is the most popular open-source, document-oriented NoSQL database, 
// holding over 45% of the NoSQL market share. Unlike relational databases that
//  rely on rigid tables, MongoDB stores data in a flexible BSON format
//  (similar to JSON), enabling faster and more efficient storage and retrieval.


//Document: A record in MongoDB is called a document.
{
  _id: ObjectId("64fe1234567890abcdef1234"),
  name: "John Doe",
  age: 30,
  skills: ["JavaScript", "MongoDB"]
}


//How to Create a New Database and Collection in MongoDB?
use mydatabase
db.createCollection("mycollection")

//How do you insert data into a collection?
db.users.insertOne({ name: "John", age: 28 })