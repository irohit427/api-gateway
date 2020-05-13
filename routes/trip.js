const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({msg: 'Show all trips'});
});

router.get('/:id', (req, res) => {
    res.status(200).send({msg: `Display trip ${req.params.id}`})
});

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