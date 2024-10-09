const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Configuration.
dotenv.config();

// Create server.
const app = express();

// Database.
dbConnection();

// Cors.
app.use(cors());

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