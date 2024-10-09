const Event = require('../../../models/event_model');

const updateOne = async (req, res = response) => {
    try {
        const { uid } = req;
        const { id } = req.params;

        // Get event.
        const event = await Event.findById(id);

        if (event === null) {
            return res.status(404).json({
                success: false,
                message: 'The selected event does not exist.',
                data: null
            });
        }

        // Check if user is allowed to change the event.
        if (event.user.toString() !== uid) {
            return res.status(401).json({
                success: false,
                message: 'You are not allowed to continue with this operation.',
                data: null
            });
        }

        // Update event.
        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventResponse = await Event.findByIdAndUpdate(id, newEvent, { new: true });

        res.status(201).json({
            success: true,
            message: 'The event has been successfully updated.',
            data: {
                event: eventResponse
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

module.exports = updateOne;