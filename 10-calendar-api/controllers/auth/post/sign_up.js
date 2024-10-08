const { response } = require('express');

const signUp = (req, res = response) => {
    const { name, email, password } = req.body; 

    res.status(201).json({
        success: true,
        message: 'ok',
        data: {
            user: req.body
        }
    });
}

module.exports = signUp;