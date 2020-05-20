/**
 *      @route          POST /api/v1/trips
 *      @description    Create new trip
 *      @access         PRIVATE
 */

const Trip = require('../../models/Trip');
const asyncHandler = require('../../middleware/async');
const createTrip = asyncHandler(async (req, res, next) => {
    const trip = await Trip.create(req.body);
    res.status(200).json({
        success: true,
        data: trip
    });
});

module.exports = createTrip;