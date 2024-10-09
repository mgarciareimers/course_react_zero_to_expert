const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
    } catch(e) {
        console.log('Error:', e);
        throw new Error('Error while initializing database.');
    }
}

module.exports = {
    dbConnection,
}