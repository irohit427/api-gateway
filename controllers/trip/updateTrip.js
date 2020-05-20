/**
 *      @route          PUT /api/v1/trip/:id
 *      @description    update trip
 *      @access         PRIVATE
 */
const asyncHandler = require('../../middleware/async');
const ErrorResponse = require('../../utils/errorResponse');
const Trip = require('../../models/Trip');

const updateTrip = asyncHandler(async (req, res, next) => {
    let  trip = await Trip.findById(req.params.id);
    if (!trip) {
        return next(new ErrorResponse(`Trip with id ${req.params.id} not found`, 404));
    }

    trip = await Trip.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: trip
    });

})

module.exports = updateTrip;