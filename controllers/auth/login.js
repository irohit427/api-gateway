/**
 *      @route              POST /api/v1/auth/login
 *      @description        login user
 *      @access             PUBLIC
 */

const User = require('../../models/User');
const asyncHandler = require('../../middleware/async');
const ErrorResponse = require('../../utils/errorResponse');
const login = asyncHandler(async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isValidUser = await user.matchPassword(password);

    if (!isValidUser) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({ success: true, token });
});

module.exports = login;