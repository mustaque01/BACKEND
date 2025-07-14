const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: uuidv4(), username: 'Apna College', content: 'Learning platform' },
    { id: uuidv4(), username: 'Md Mustak', content: 'I Love Coding' },
    { id: uuidv4(), username: 'sharadha maam', content: 'I got selected for my first internship' }
];

app.get('/posts', (req, res) => {
    res.render('index', { posts });
});

app.get("/posts/new", (req, res) => {
    res.render('new');
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect('/posts');
});


app.get("/posts/:id", (req, res) => {
    let{id} = req.params;
    // console.log(id);
    let post = posts.find(p => p.id === id);
    console.log(post);
    // res.send("request working!");/
    res.render('show', { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent);
    res.send("Update request working!");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
