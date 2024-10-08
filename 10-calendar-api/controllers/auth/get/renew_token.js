const { response } = require('express');

const renewToken = (req, res = response) => {
    res.json({
        success: true,
        message: 'ok',
    });
}

module.exports = renewToken;