/**
 *      @route          GET /api/v1/trips
 *      @description    get all the trips
 *      @access         PUBLIC
 */
const asyncHandler = require('../../middleware/async');
const Trip = require('../../models/Trip');
const getTrips = asyncHandler(async(req, res, next) => {
   const trips = await Trip.find();
   res.status(200).json({
      success: true,
      data: trips
   });
});

module.exports = getTrips;