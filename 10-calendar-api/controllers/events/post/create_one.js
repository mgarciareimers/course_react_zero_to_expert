const Event = require('../../../models/event_model');

const createOne = async (req, res = response) => {
    try {
        // Create event.
        const event = new Event(req.body);
        event.user = req.uid;
        
        await event.save();

        res.status(201).json({
            success: true,
            message: 'The event has been successfully created.',
            data: {
                event: event
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

module.exports = createOne;