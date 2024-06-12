const express = require('express');
const registerUser = require('../controller/registerUser');

const router = express.Router();

// Create User API
router.post('/register', registerUser);

module.exports = router;
