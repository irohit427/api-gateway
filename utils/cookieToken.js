const generateCookieToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE*3600*24),
        httpOnly: true
    };
    if (process.env.NODE_ENV == 'production') {
        options.secure = true;
    }
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    });
}

module.exports = generateCookieToken;