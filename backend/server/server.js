const express = require('express');
const { PORT, mongoDBURL } = require("./config");
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes.js');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Just specify the origin without path
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use('/recipes', recipeRoutes);

app.get('/', (req, res) => {
    return res.status(200).send('Welcome to recipe-generator!');
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
