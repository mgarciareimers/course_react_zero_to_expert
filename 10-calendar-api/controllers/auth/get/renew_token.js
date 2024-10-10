const { response } = require('express');
const { generateJWT } = require('../../../helpers/jwt');

const renewToken = async (req, res = response) => {
    const { uid, userName } = req;

    // Generate jwt.
    const tokenResponse = await generateJWT(uid);

    if (!tokenResponse.success) {
        return res.status(500).json({
            success: false,
            message: tokenResponse.message,
            data: null
        });
    }

    res.json({
        success: true,
        message: 'The token has been succesfully renewed.',
        data: {
            token: tokenResponse.data.token,
            uid,
            name: userName
        }
    });
}

module.exports = renewToken;