const express = require ('express'); //import express module
const app = express(); //create express app
const port = 3000; //define port to load website

require('dotenv').config();

app.use(express.static('public')); //using static files in the public folder

app.get('/dinoname', async(request, response) => {
    const fetchApi = await fetch ('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')
    
    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
});

app.get('/dinoimage', async(request, response) => {
    const fetchApi = await fetch 
    ('https://joj-image-search.p.rapidapi.com/v2/?q=dinosaur&hl=en',
    {
        method: 'GET',
        headers: 
            {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
            },
        }
    );
    const dinoImageResponse = await fetchApi.json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});