const express = require("express");
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
    res.send(`Welcome to the Homepage - <a href="/user">Go to Profile</a>`);
});

app.get('/user', function(req, res) {
    res.send('My name is Nkem. This is my profile page - <a href="/">Go Home</a>');
});

app.get('/calculator/add', (req, res)=>{
    res.send("This is the calculator page");
});

try {
    app.listen(port, () => {
        console.log(`Server is now running on - http://localhost:${port}`);
    });
} catch (error) {
   console.log('An error occurred', error);
}

