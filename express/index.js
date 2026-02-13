// server created with the help of Express 

const express = require('express');
const app = express(); // instance of express, its created server 

PORT = 4001;
const HOSTNAME = 'localhost'

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/about', (req, res) => {
    res.send('This is a about page')
})

app.get('/contact', (req, res) => {
    res.send('This is a contact page')
})

app.get('/product', (req, res) => {
    res.send('This is a product page')
})

app.listen(PORT, () => {
    console.log(`server running at ${PORT} ${HOSTNAME}` )
})