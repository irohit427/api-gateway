const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 1000
});

// Load env
dotenv.config({path: path.resolve(__dirname, './config/config.env')});
const mongoConnect = require('./config/db');
const trip = require('./routes/trip');
const auth = require('./routes/auth');
const errorHandler = require('./middleware/error');
//const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT;
mongoConnect();
app.use(morgan('combined'));
app.use(cookieParser());
app.use(express.json());
app.use(limiter);
app.use(cors());
app.use('/api/v1/trips', trip);
app.use('/api/v1/auth', auth);
app.use(errorHandler);
app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());

app.get('/', (req, res) => {
    res.send('Trips');
})

const server = app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
})