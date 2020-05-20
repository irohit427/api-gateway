const express = require('express');
const router = express.Router();

const getTrips = require('../controllers/trip/getTrips');
const getTrip = require('../controllers/trip/getTrip');
const createTrip = require('../controllers/trip/createTrip');
const updateTrip = require('../controllers/trip/updateTrip');
const deleteTrip = require('../controllers/trip/deleteTrip');

router.route('/').get(getTrips).post(createTrip);

router.route('/:id').get(getTrip).put(updateTrip).delete(deleteTrip);

router.post('/', (req, res) => {
    res.status(200).send({msg: 'Create new trip'});
});

router.put('/:id', (req, res) => {
    res.status(200).send({msg: `Update trip ${req.params.id}`})
});

router.delete('/:id', (req, res) => {
    res.status(200).send({msg: `Delete trip ${req.params.id}`})
});

module.exports = router;