/**
 *      @route          GET /api/v1/trips/:id
 *      @description    get a specific trip
 *      @acces          PUBLIC    
 */

const asyncHandler = require('../../middleware/async');
const ErrorResponse = require('../../utils/errorResponse');
const Trip = require('../../models/Trip');
const getTrip = asyncHandler(async (req, res, next) => {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
        return next(new ErrorResponse(`Trip not found with ${req.params.id}`, 404))
    }
    res.status(200).json({
        success: true,
        data: trip
    });
})

module.exports = getTrip;