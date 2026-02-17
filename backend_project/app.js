require('dotenv').config();
const express = require('express');
// import express from 'express'; anoter way to import express
const cors = require('cors'); // for cross-origin resource sharing

const connectDB = require('./config/db.js');

const app = express();

// express middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.use(cors());

// init DB connection
connectDB();

const userRoutes = require('./routes/userRoutes.js');

app.use("/", userRoutes);

module.exports = app;
// export default app; // anoter way to export app