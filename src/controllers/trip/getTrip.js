/**
 *      @route          GET /api/v1/trips/:id
 *      @description    get a specific trip
 *      @acces          PUBLIC    
 */

const getTrip = (req, res, next) => {
    res.status(200).send({
        msg:  `Displaying trip ${req.params.id}`
    });
};

module.exports = getTrip;