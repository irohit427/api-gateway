const express = require('express');
const router = express.Router();

const register = require('../controllers/auth/register');
const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

router.route('/register').post(register)
router.route('/login').post(login);
router.route('/logout').get(logout);
module.exports = router;