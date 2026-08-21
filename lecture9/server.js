const express = require('express');
const app = express();
const PORT = 3000;

const users = [
        {id: 1, name: "John", email:"john@example.com"},
        {id: 2, name: "Jane", email:"jane@example.com"},
        {id: 3, name: "Bob", email:"bob@example.com"}
    ]

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');2
});