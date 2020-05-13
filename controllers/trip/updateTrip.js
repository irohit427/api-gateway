/**
 *      @route          PUT /api/v1/trip/:id
 *      @description    update trip
 *      @access         PRIVATE
 */

const updateTrip = (req, res, next) => {
    res.status(200).send({
        msg: `Updated trip ${req.params.id}`
    })
}

module.exports = updateTrip;