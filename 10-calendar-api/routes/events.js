const express = require('express');
const router = express.Router();

const { createOne, deleteOne, getAll, updateOne } = require('../controllers/events');
const { eventsMiddlewares } = require('../middlewares');

router.post('/', eventsMiddlewares.createOne, createOne);

router.put('/:id', eventsMiddlewares.updateOne, updateOne);

router.get('/all', eventsMiddlewares.getAll, getAll);

router.delete('/:id', eventsMiddlewares.deleteOne, deleteOne);

module.exports = router;