const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


// Load env
dotenv.config({path: '.\\config\\config.env'});
const mongoConnect = require('./config/db');
const trip = require('./routes/trip');
const auth = require('./routes/auth');
const errorHandler = require('./middleware/error');
//const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT;
mongoConnect();
app.use(morgan('combined'));
app.use(express.json());
app.use('/api/v1/trips', trip);
app.use('/api/v1/auth', auth);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Trips');
})

const server = app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})