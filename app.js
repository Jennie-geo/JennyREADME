const express = require("express");
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
    res.send("Welcome to the Homepage");
});

try {
    app.listen(port, () => {
        console.log(`Server is now running on - http://localhost:${port}`);
    });
} catch (error) {
   console.log('An error occurred', error);
}

