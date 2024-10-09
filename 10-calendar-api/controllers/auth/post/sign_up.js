const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../../models/user_model');
const { generateJWT } = require('../../../helpers/jwt');

const signUp = async (req, res = response) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists.
        let user = await User.findOne({ email });

        if (user !== null) {
            return res.status(409).json({
                success: false,
                message: 'A user with the chosen email already exists.',
                data: null
            });
        }

        // Encrypt password.
        const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync());

        // Create user.
        user = new User({ name, email, password: passwordHash });
        await user.save();

        // Generate jwt.
        const tokenResponse = await generateJWT(user.id);

        if (!tokenResponse.success) {
            return res.status(500).json({
                success: false,
                message: tokenResponse.message,
                data: null
            });
        }

        res.status(201).json({
            success: true,
            message: 'The account has been successfully created.',
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

module.exports = signUp;