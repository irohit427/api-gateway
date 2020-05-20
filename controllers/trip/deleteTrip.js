/**
 *      @route          DELETE /api/v1/trips/:id
 *      @description    delete a trip
 *      @access         PRIVATE
 */
const asyncHandler = require('../../middleware/async');
const Trip = require('../../models/Trip');
const ErrorResponse = require('../../utils/errorResponse');

const deleteTrip = asyncHandler(async (req, res, next) => {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
        return next(new ErrorResponse(`Trip with ${req.params.id} not found`, 404));
    }

    trip.remove();
    res.status(200).json({
        success: true
    })
})

module.exports = deleteTrip;