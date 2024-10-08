const { response } = require('express');

const login = (req, res = response) => {
    const { email, password } = req.body; 

    res.json({
        success: true,
        message: 'ok',
        data: {
            user: req.body
        }
    });
}

module.exports = login;