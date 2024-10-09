const jwt = require('jsonwebtoken');

const generateJWT = (uid) => {
    return new Promise((resolve) => {
        const data = { uid };

        jwt.sign(data, process.env.JWT_SECRET_KEY, { 
            expiresIn: process.env.JWT_EXPIRATION_TIME
        }, (error, token) => {
            if (error !== undefined && error !== null) {
                resolve({
                    success: false,
                    message: 'Error while generating token.',
                    data: null
                });
            }

            resolve({
                success: true,
                message: 'ok',
                data: {
                    token
                }
            });
        });
    });
}

module.exports = {
    generateJWT,
}