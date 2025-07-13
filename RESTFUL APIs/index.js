const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { username: 'Apna College', content: 'Learning platform' },
    { username: 'Md Mustak', content: 'I Love Coding' },
    { username: 'sharadha maam', content: 'I got selected for my first internship' }
];

app.get('/posts', (req, res) => {
    res.render('index', { posts });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
