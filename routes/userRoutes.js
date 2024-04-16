const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const { verifyToken } = require('../middleware/auth');
router.post('/auth/register', userControllers.registerUser);
router.post('/auth/login', userControllers.loginUser);
router.get('/auth/users', verifyToken, userControllers.getUsers);
module.exports = router;