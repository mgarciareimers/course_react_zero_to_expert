const { validationResult } = require('express-validator');

const validateErrors = (req, res, next) => {
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

module.exports = {
    validateErrors,
}