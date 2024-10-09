const { response } = require('express');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const validateErrors = (req, res = response, next) => {
    const { errors } = validationResult(req);

    if (errors === undefined || errors === null || errors.length <= 0) {
        return next();
    }

    res.status(400).json({
        success: false,
        message: errors[0].msg,
        data: null
    });
} 

const validateJWT = (req, res = response, next) => {
    const token = req.headers.token;

    if (token === undefined || token === null) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user: No token on header.',
            data: null
        });
    }

    try {
        // Validate token.
        const { uid } = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (uid === undefined || uid === null) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized user: Token not valid.',
                data: null
            });
        }

        req.uid = uid;
    } catch(e) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized user: Token not valid.',
            data: null
        });
    }

    next();
}

module.exports = {
    validateErrors,
    validateJWT,
}