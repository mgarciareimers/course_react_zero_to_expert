const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        route: 'calendar'
    });
});

module.exports = router;