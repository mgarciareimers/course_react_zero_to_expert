const { check } = require('express-validator');
const { validateErrors } = require('./validator');

const login = [
    check('email', 'Email is mandatory.').isEmail(),
    check('password', 'Password is mandatory.').notEmpty(),
    check('password', 'Password minimum length is 6.').isLength({ min: 6 }),
    validateErrors,
]

const signUp = [
    check('name', 'Name is mandatory.').notEmpty(),
    check('email', 'Email is mandatory.').isEmail(),
    check('password', 'Password is mandatory.').notEmpty(),
    check('password', 'Password minimum length is 6.').isLength({ min: 6 }),
    validateErrors,
]

module.exports = {
    login,
    signUp,
}