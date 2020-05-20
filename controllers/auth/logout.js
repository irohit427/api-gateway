/**
 *          @route              GET /api/v1/auth/logout
 *          @description        logout session
 *          @access             PUBLIC
 */
const asyncHandler = require('../../middleware/async');
const ErrorResponse = require('../../utils/errorResponse');

const logout = asyncHandler((req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        data: {}
    });
});

module.exports = logout;