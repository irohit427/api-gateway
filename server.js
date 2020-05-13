const express = require('express');
const dotenv = require('dotenv');

// Load env
dotenv.config({path: '.\\config\\config.env'});

const trip = require('./routes/trip');

const app = express();
const PORT = process.env.PORT;

app.use('/api/v1/trips', trip);

app.get('/', (req, res) => {
    res.send('Trips');
})

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));