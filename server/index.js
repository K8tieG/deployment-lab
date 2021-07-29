require('dotenv').config();
const express = require ('express');
const path = require ('path');

const app = express ();

const port = process.env.PORT || 5000

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => {console.log(`Listening on port ${port}`)})