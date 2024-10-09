const { check } = require('express-validator');
const { validateErrors, validateJWT } = require('./validator');
const checkIsDate = require('../helpers/check_is_date');

const createOne = [
    check('title', 'Title is mandatory.').notEmpty(),
    check('start', 'Start date is mandatory.').custom(checkIsDate),
    check('end', 'End date is mandatory.').custom(checkIsDate),
    validateErrors,
    validateJWT
]

const deleteOne = [
    validateJWT
];

const getAll = [
    validateJWT
]

const updateOne = [
    check('title', 'Title is mandatory.').notEmpty(),
    check('start', 'Start date is mandatory.').custom(checkIsDate),
    check('end', 'End date is mandatory.').custom(checkIsDate),
    validateErrors,
    validateJWT
];

module.exports = {
    createOne,
    deleteOne,
    getAll,
    updateOne
}