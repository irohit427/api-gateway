const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const authorize = require('../middleware/roles');
const rateLimiter = require('express-rate-limit');

const getTrips = require('../controllers/trip/getTrips');
const getTrip = require('../controllers/trip/getTrip');
const createTrip = require('../controllers/trip/createTrip');
const updateTrip = require('../controllers/trip/updateTrip');
const deleteTrip = require('../controllers/trip/deleteTrip');

router.route('/').get(getTrips).post(auth, authorize('admin'), createTrip);

router.route('/:id').get(getTrip).put(auth, authorize('admin'), updateTrip).delete(auth, authorize('admin'), deleteTrip);

module.exports = router;