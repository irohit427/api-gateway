/**
 *      @route          DELETE /api/v1/trips/:id
 *      @description    delete a trip
 *      @access         PRIVATE
 */

const deleteTrip = (req, res, next) => {
    req.status(200).send({
        msg: `Deleted trip ${id}`
    });
};

module.exports = deleteTrip;