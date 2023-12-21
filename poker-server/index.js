/**
 * EXTERNAL DEPENDENCIES TO RUN OUR APPLICATION
 */
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const mongo = require('mongo');

/**
* INSTANTIATION OF THE APPLICATION THROUGH EXPRESS SERVER
 */
const app = express();
const PORT = 6900;
const options = { exposedHeaders: ['Authorization'] };

// app.use(cors(options));
app.use(express.json());
app.use(cors(options));

/**
 * BUILD THE RESOURCE ROUTES
 */
const cards = require('./api/cards/cards-routes.js')

app.use('/cards', cards);

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
});