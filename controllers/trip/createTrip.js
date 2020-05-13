/**
 *      @route          POST /api/v1/trips
 *      @description    Create new trip
 *      @access         PRIVATE
 */

const createTrip = (req, res, next) => {
    res.status(200).send({
        msg: 'Created Trip'
    });
};

module.exports = createTrip;