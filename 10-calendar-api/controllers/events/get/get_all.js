const Event = require('../../../models/event_model');

const getAll = async (req, res = response) => {
    try {
        const events = await Event
            .find()
            .populate('user', 'name');

        res.status(201).json({
            success: true,
            message: 'ok',
            data: {
                list: events
            }
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'An error ocurred. Please try again.',
            data: null
        });
    }
}

module.exports = getAll;