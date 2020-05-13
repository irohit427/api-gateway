/**
 *      @route          GET /api/v1/trips
 *      @description    get all the trips
 *      @access         PUBLIC
 */

const getTrips = (req, res, next) => {
   res.status(200).send({msg: 'Show all the trips'})
}

module.exports = getTrips;