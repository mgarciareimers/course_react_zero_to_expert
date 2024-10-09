const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../../models/user_model');
const { generateJWT } = require('../../../helpers/jwt');

const login = async (req, res = response) => {
    try {
        const { email, password } = req.body;

        // Check if user exists.
        let user = await User.findOne({ email });

        if (user === null) {
            return res.status(404).json({
                success: false,
                message: 'Wrong credentials.',
                data: null
            });
        }

        // Validate password.
        const passwordIsValid = bcrypt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(404).json({
                success: false,
                message: 'Wrong credentials.',
                data: null
            });
        }

        // Generate jwt.
        const tokenResponse = await generateJWT(user.id);

        if (!tokenResponse.success) {
            return res.status(500).json({
                success: false,
                message: tokenResponse.message,
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: 'ok',
            data: {
                uid: user.id,
                name: user.name,
                token: tokenResponse.data.token
            }
        });
    } catch(e) {
        res.status(500).json({
            success: false,
            message: 'An error ocurred. Please try again.',
            data: null
        });
    }
}

module.exports = login;