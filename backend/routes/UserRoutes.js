const express = require('express');
const registerUser = require('../controller/registerUser');
const loginUser = require('../controller/loginUser');
const userDetails = require('../controller/GetUserInfo');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// Create User API
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/userinfo', verifyToken, userDetails); // Protected route

module.exports = router;
