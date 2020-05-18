const asyncHandler = require('../../middleware/async');
const User = require('../../models/User');

/**
 *      @route              POST /api/v1/auth/register
 *      @description        register user
 *      @access             PUBLIC
 */

const register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;
    const user = await User.create({
        name, email, password, role
    });
    const token = user.getSignedJwtToken();
    res.status(200).json({ succes: true, token})
});

module.exports = register;
