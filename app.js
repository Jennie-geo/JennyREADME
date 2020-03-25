const express = require("express");
const calculator = require("./calculator");
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
    res.send(`Welcome to the Homepage - <a href="/user">Go to Profile</a>`);
});

app.get('/user', function(req, res) {
    res.send('My name is Nkem. This is my profile page - <a href="/">Go Home</a>');
});

app.get('/calculator/add', (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const result = calculator.addNumbers(a, b);

    res.send(`Adding ${a} + ${b} = ${result}`);
});

app.get('/calculator/minus', (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const result = calculator.subtractNumbers(a, b);

    res.send(`Subtract ${a} - ${b} = ${result}`);
});

app.get('/calculator/multiply', (req, res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const result = calculator.multiplyNumbers(a, b);

    res.send(`Multiply ${a} * ${b} = ${result}`);
});

try {
    app.listen(port, () => {
        console.log(`Server is now running on - http://localhost:${port}`);
    });
} catch (error) {
   console.log('An error occurred', error);
}

