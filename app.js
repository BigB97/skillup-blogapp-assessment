// Require packages
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const {PORT, BASE_URL, DB_URL} = process.env
const Mongo = require('./config/mongo.config')

// intailling packages
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Routes 
app.use('/api', require('./routes/home.route'));


// Start server
app.listen( process.env.PORT || 3000, async () => {
    await Mongo(DB_URL)
    console.log(`the server is running on Port ${BASE_URL}${PORT}`);
});