require('dotenv').config();
const express = require ('express');
const path = require ('path');

const app = express ();

const port = process.env.PORT || 5000

// app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, '../public'))) 

app.use('/public/images',express.static(path.join(__dirname, '../public/images')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})



app.listen(port, () => {console.log(`Listening on port ${port}`)})