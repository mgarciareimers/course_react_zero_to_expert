const express = require('express');
const dotenv = require('dotenv');

// Configuration.
dotenv.config();

// Create server.
const app = express();

// Public directory.
app.use(express.static('public'));

// Read and parse body.
app.use(express.json());

// Routes.
app.use('/', require('./routes'));

// Run server.
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`);
});