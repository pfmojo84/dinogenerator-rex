const express = require ('express'); //import express module
const app = express(); //create express app
const port = 3000; //define port to load website

app.use(express.static('public')); //using static files in the public folder

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});