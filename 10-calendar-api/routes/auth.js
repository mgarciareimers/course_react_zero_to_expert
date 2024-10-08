const express = require('express');
const router = express.Router();

const { login, renewToken, signUp } = require('../controllers/auth');
const { authMiddlewares } = require('../middlewares');

router.post('/login', authMiddlewares.login, login);
router.post('/signup', authMiddlewares.signUp, signUp);

router.get('/renewtoken', [], renewToken);

module.exports = router;